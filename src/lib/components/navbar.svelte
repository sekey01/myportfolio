<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  
  let mobileMenuOpen = false;
  let activeLink = 'home';
  
  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];
  
  function setActive(link: string) {
    activeLink = link;
    mobileMenuOpen = false;
  }
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<nav class="navbar">
  <div class="nav-container">
    
    <!-- Logo Section -->
    <div class="logo-section" in:fade={{ duration: 800, delay: 300 }}>
      <div class="logo-container">
        <div class="logo-icon">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <!-- Geometric logo design -->
            <rect x="2" y="2" width="36" height="36" rx="8" fill="url(#grad1)" stroke="url(#grad2)" stroke-width="1"/>
            <path d="M12 16L20 12L28 16V28L20 32L12 28V16Z" fill="rgba(255,255,255,0.1)"/>
            <circle cx="20" cy="20" r="6" fill="rgba(255,255,255,0.2)"/>
            <path d="M16 20L19 23L24 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#3b82f6"/>
                <stop offset="100%" style="stop-color:#1e40af"/>
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#60a5fa"/>
                <stop offset="100%" style="stop-color:#3b82f6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="logo-text">
          <span class="logo-primary">Elikem</span>
          <span class="logo-secondary">Dev</span>
        </div>
      </div>
    </div>
    
    <!-- Desktop Navigation -->
    <div class="desktop-nav">
      {#each navItems as item, index}
        <a
          href={item.href}
          class="nav-link"
          class:active={activeLink === item.id}
          on:click={() => setActive(item.id)}
          in:fade={{ duration: 600, delay: 500 + (index * 100) }}
        >
          <span class="nav-text">{item.label}</span>
          <div class="nav-glow"></div>
        </a>
      {/each}
    </div>
    
    <!-- CTA Button -->
    <div class="cta-section" in:fade={{ duration: 600, delay: 900 }}>
      <a href="#contact" class="cta-btn" on:click={() => setActive('contact')}>
        <span>Let's Work</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
        </svg>
      </a>
    </div>
    
    <!-- Mobile Menu Button -->
    <button
      class="mobile-menu-btn"
      on:click={toggleMobileMenu}
      aria-label="Toggle navigation menu"
      aria-expanded={mobileMenuOpen}
    >
      <div class="menu-icon" class:open={mobileMenuOpen}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    
  </div>
  
  <!-- Mobile Navigation Menu -->
  {#if mobileMenuOpen}
    <div 
      class="mobile-nav"
      transition:slide={{ duration: 400, easing: quintOut }}
    >
      <div class="mobile-nav-content">
        {#each navItems as item, index}
          <a
            href={item.href}
            class="mobile-nav-link"
            class:active={activeLink === item.id}
            on:click={() => setActive(item.id)}
            in:fade={{ duration: 300, delay: index * 80 }}
          >
            <span class="mobile-nav-text">{item.label}</span>
            <div class="mobile-nav-arrow">→</div>
          </a>
        {/each}
        
        <div class="mobile-cta" in:fade={{ duration: 300, delay: 320 }}>
          <a href="#contact" class="mobile-cta-btn" on:click={() => setActive('contact')}>
            Start a Project
          </a>
        </div>
      </div>
    </div>
  {/if}
</nav>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  
  /* Main Navbar */
  .navbar {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(24px) saturate(180%);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 
      0 1px 3px rgba(0, 0, 0, 0.05),
      0 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  .nav-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  
  /* Logo Section */
  .logo-section {
    flex-shrink: 0;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .logo-container:hover {
    transform: translateY(-1px);
  }
  
  .logo-icon {
    position: relative;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .logo-container:hover .logo-icon {
    transform: rotate(5deg) scale(1.05);
    filter: drop-shadow(0 8px 16px rgba(59, 130, 246, 0.2));
  }
  
  .logo-text {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 1.25rem;
    letter-spacing: -0.025em;
  }
  
  .logo-primary {
    color: #1f2937;
  }
  
  .logo-secondary {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  /* Desktop Navigation */
  .desktop-nav {
    display: none;
    align-items: center;
    gap: 0.25rem;
    flex: 1;
    justify-content: center;
  }
  
  @media (min-width: 1024px) {
    .desktop-nav {
      display: flex;
    }
  }
  
  .nav-link {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    border-radius: 16px;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    color: #4b5563;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    border: 1px solid transparent;
  }
  
  .nav-link::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 16px;
  }
  
  .nav-link:hover::before {
    opacity: 1;
  }
  
  .nav-link:hover {
    color: #1f2937;
    transform: translateY(-2px);
    border-color: rgba(59, 130, 246, 0.2);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
  }
  
  .nav-link.active {
    color: #ffffff;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    border-color: #3b82f6;
    box-shadow: 
      0 4px 14px rgba(59, 130, 246, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  
  .nav-text {
    position: relative;
    z-index: 2;
  }
  
  .nav-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(59, 130, 246, 0.2), transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 16px;
  }
  
  .nav-link.active .nav-glow {
    opacity: 1;
  }
  
  /* CTA Section */
  .cta-section {
    display: none;
    flex-shrink: 0;
  }
  
  @media (min-width: 1024px) {
    .cta-section {
      display: block;
    }
  }
  
  .cta-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: #ffffff;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 
      0 4px 14px rgba(59, 130, 246, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  
  .cta-btn:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 
      0 8px 25px rgba(59, 130, 246, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
  
  .cta-btn svg {
    transition: transform 0.3s ease;
  }
  
  .cta-btn:hover svg {
    transform: translateX(2px);
  }
  
  /* Mobile Menu Button */
  .mobile-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  @media (min-width: 1024px) {
    .mobile-menu-btn {
      display: none;
    }
  }
  
  .mobile-menu-btn:hover {
    background: rgba(59, 130, 246, 0.1);
  }
  
  .menu-icon {
    width: 24px;
    height: 18px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .menu-icon span {
    display: block;
    height: 2px;
    width: 100%;
    background: #4b5563;
    border-radius: 1px;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  .menu-icon.open span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
    background: #3b82f6;
  }
  
  .menu-icon.open span:nth-child(2) {
    opacity: 0;
    transform: translateX(20px);
  }
  
  .menu-icon.open span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
    background: #3b82f6;
  }
  
  /* Mobile Navigation */
  .mobile-nav {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(24px);
    border-top: 1px solid rgba(59, 130, 246, 0.1);
  }
  
  .mobile-nav-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.5rem 2rem;
  }
  
  .mobile-nav-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    margin: 0.5rem 0;
    border-radius: 16px;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    color: #4b5563;
    transition: all 0.3s ease;
    border: 1px solid transparent;
  }
  
  .mobile-nav-link:hover {
    color: #1f2937;
    background: rgba(59, 130, 246, 0.1);
    border-color: rgba(59, 130, 246, 0.2);
    transform: translateX(8px);
  }
  
  .mobile-nav-link.active {
    color: #ffffff;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    border-color: #3b82f6;
  }
  
  .mobile-nav-arrow {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }
  
  .mobile-nav-link:hover .mobile-nav-arrow {
    transform: translateX(4px);
  }
  
  .mobile-cta {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(59, 130, 246, 0.1);
  }
  
  .mobile-cta-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: #ffffff;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    border-radius: 12px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 14px rgba(59, 130, 246, 0.2);
  }
  
  .mobile-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  }
  
  /* Smooth scrolling */
  :global(html) {
    scroll-behavior: smooth;
  }
  
  /* Enhanced scrollbar */
  :global(::-webkit-scrollbar) {
    width: 6px;
  }
  
  :global(::-webkit-scrollbar-track) {
    background: #0f172a;
  }
  
  :global(::-webkit-scrollbar-thumb) {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    border-radius: 3px;
  }
  
  :global(::-webkit-scrollbar-thumb:hover) {
    background: linear-gradient(135deg, #1d4ed8, #1e40af);
  }
</style>