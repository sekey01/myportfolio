<script>
  let show = true;
  let input = '';
  let history = [
    '$ booting system...',
    '$ loading vision',
    '$ ready_'
  ];
  let currentDir = '~';
  let inputRef = null;
  let terminalRef = null;

  const directories = {
    '~': {
      type: 'root',
      content: ['about', 'projects', 'skills', 'contact'],
      description: 'Home directory. Available directories: about, projects, skills, contact'
    },
    'about': {
      type: 'dir',
      content: [
        ' ABOUT SEKEY PRINCE ',
        '',
        'Name: Sekey Prince',
        'Role: Full Stack Developer',
        'Location: Accra, Ghana',
        'Experience: 1+ years',
        '',
        'I am a public speaker and developer. I build scalable web and mobile applications with modern technologies.',
        'Passionate about clean code and user experience.',
        '',
        'Type "cd .." to go back'
      ]
    },
    'projects': {
      type: 'dir',
      content: [
        ' MY PROJECTS ',
        '',
        '1. BundleX - Data Bundle Platform',
        '   Tech: React, Firebase, TypeScript',
        '   Status: Live in production',
        '',
        '2. MealMate - Food Delivery App',
        '   Tech: Next.js, PostgreSQL, Tailwind',
        '   Status: In development',
        '',
        '3. Portfolio Terminal',
        '   Tech: Svelte, TypeScript',
        '   Status: You\'re using it!',
        '',
        'Type "cd .." to go back'
      ]
    },
    'skills': {
      type: 'dir',
      content: [
        ' SKILLS ',
        '',
        'Frontend:',
        '  • React, Svelte, Vue.js',
		'  • Flutter, SwiftUI',
        '  • TypeScript, JavaScript',
        '  • Tailwind CSS, styled-components',
        '',
        'Backend:',
        '  • Node.js, Express',
        '',
      
        'Type "cd .." to go back'
      ]
    },
    'contact': {
      type: 'dir',
      content: [
        ' CONTACT INFO ',
        '',
        'Email: sekeyprince1@.com',
        'GitHub: github.com/sekeyprince',
        'LinkedIn: linkedin.com/in/sekey01',
        'X % Instagram: @sekeyprince',
        'Phone: +233 55 376 7177',
        '',
        'Feel free to reach out for collaborations!',
        '',
        'Type "cd .." to go back'
      ]
    }
  };

  $: if (terminalRef) {
    terminalRef.scrollTop = terminalRef.scrollHeight;
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') show = false;
  }

  function handleCommand() {
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let newHistory = [...history, `${currentDir} $ ${input}`];

    const parts = cmd.split(' ');
    const command = parts[0];
    const arg = parts[1];

    switch (command) {
      case 'cd':
        if (arg === '..') {
          currentDir = '~';
          newHistory.push('Moved to home directory');
        } else if (arg && directories[arg] && directories['~'].content.includes(arg)) {
          currentDir = arg;
          newHistory.push(`Entering ${arg}...`, '');
          directories[arg].content.forEach(line => newHistory.push(line));
        } else if (!arg) {
          newHistory.push('Usage: cd <directory> or cd ..');
        } else {
          newHistory.push(`Error: Directory '${arg}' not found`);
          newHistory.push('Available: ' + directories['~'].content.join(', '));
        }
        break;

      case 'ls':
        if (currentDir === '~') {
          newHistory.push('Available directories:');
          directories['~'].content.forEach(dir => newHistory.push(`  📁 ${dir}`));
        } else {
          newHistory.push('Use "cd .." to go back to see directories');
        }
        break;

      case 'cls':
      case 'clear':
        history = ['$ Terminal cleared', '$ ready_'];
        input = '';
        return;

      case 'help':
        newHistory.push('Available commands:');
        newHistory.push('  cd <dir>  - Navigate to directory');
        newHistory.push('  cd ..     - Go back to home');
        newHistory.push('  ls        - List directories');
        newHistory.push('  cls/clear - Clear terminal');
        newHistory.push('  help      - Show this help');
        newHistory.push('  exit      - Close terminal');
        newHistory.push('');
        newHistory.push('Available directories: about, projects, skills, contact');
        break;

      case 'exit':
        show = false;
        return;

      default:
        newHistory.push(`Command not found: ${command}`);
        newHistory.push('Type "help" for available commands');
    }

    history = newHistory;
    input = '';
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleCommand();
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

{#if show}
  <div
    class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    on:click={() => (show = false)}
    role="button"
    tabindex="0"
  >
    <div
      class="bg-black text-green-500 w-full md:w-[70%] lg:w-[60%] h-[80%] max-h-[600px]
             rounded-2xl shadow-2xl border border-green-500/30
             p-4 font-mono relative flex flex-col"
      on:click={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
    >
      <div class="flex justify-between items-center border-b border-green-500/20 pb-2 mb-3">
        <div class="flex items-center space-x-2">
          <span class="text-sm opacity-80">sudo terminal</span>
          <span class="text-xs text-green-400/60">[{currentDir}]</span>
        </div>
        <button
          class="text-red-400 hover:text-red-600 transition"
          on:click={() => (show = false)}
        >
          ✕
        </button>
      </div>

      <div 
        bind:this={terminalRef}
        class="flex-1 overflow-y-auto space-y-1 text-sm mb-3"
      >
        {#each history as line, i (i)}
          <p class={line.startsWith('$') ? 'text-green-400' : ''}>
            {line}
          </p>
        {/each}
      </div>

      <div class="flex items-center space-x-2 border-t border-green-500/20 pt-2">
        <span class="text-green-400">{currentDir} $</span>
        <input
          bind:this={inputRef}
          type="text"
          bind:value={input}
          on:keypress={handleKeyPress}
          class="flex-1 bg-transparent text-green-500 outline-none font-mono"
          placeholder="Type 'help' for commands..."
          autofocus
        />
        <span class="animate-pulse">|</span>
      </div>

      <div class="text-xs text-green-500/40 mt-2 text-center">
        Try: cd about | cd projects | cd skills | cd contact | help | cls
      </div>
    </div>
  </div>
{/if}