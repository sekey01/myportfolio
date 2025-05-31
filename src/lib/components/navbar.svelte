<script lang="ts">
  export let title: string = "Prince Sekey";
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
    
    <!-- Brand/Logo Section -->
    <div class="brand-section">
      <div class="brand-text" in:fade={{ duration: 800, delay: 200 }}>
        {title}
      </div>
      <div class="brand-accent"></div>
    </div>
    
    <!-- Desktop Navigation -->
    <div class="desktop-nav">
      {#each navItems as item, index}
        <a
          href={item.href}
          class="nav-link"
          class:active={activeLink === item.id}
          on:click={() => setActive(item.id)}
          in:fade={{ duration: 600, delay: 300 + (index * 100) }}
        >
          <span class="nav-text">{item.label}</span>
          <div class="nav-indicator"></div>
        </a>
      {/each}
    </div>
    
    <!-- Mobile Menu Button -->
    <button
      class="mobile-menu-btn"
      on:click={toggleMobileMenu}
      aria-label="Toggle navigation menu"
      aria-expanded={mobileMenuOpen}
    >
      <div class="hamburger" class:open={mobileMenuOpen}>
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
      {#each navItems as item, index}
        <a
          href={item.href}
          class="mobile-nav-link"
          class:active={activeLink === item.id}
          on:click={() => setActive(item.id)}
          in:fade={{ duration: 300, delay: index * 50 }}
        >
          <span class="mobile-nav-text">{item.label}</span>
          <div class="mobile-nav-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </div>
        </a>
      {/each}
    </div>
  {/if}
</nav>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  /* Main Navbar Container */
  .navbar {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }
  
  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  /* Brand Section */
  .brand-section {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .brand-text {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.025em;
  }
  
  .brand-accent {
    width: 4px;
    height: 24px;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    border-radius: 2px;
    animation: pulse 2s ease-in-out infinite;
  }
  
  /* Desktop Navigation */
  .desktop-nav {
    display: none;
    align-items: center;
    gap: 0.5rem;
  }
  
  @media (min-width: 768px) {
    .desktop-nav {
      display: flex;
    }
  }
  
  .nav-link {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.75rem 1.25rem;
    border-radius: 12px;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    color: #94a3b8;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }
  
  .nav-link:hover {
    color: #f1f5f9;
    background: rgba(148, 163, 184, 0.1);
    transform: translateY(-1px);
  }
  
  .nav-link.active {
    color: #1e293b;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  }
  
  .nav-text {
    position: relative;
    z-index: 2;
  }
  
  .nav-indicator {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #f59e0b, #d97706);
    border-radius: 1px;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  .nav-link:hover .nav-indicator {
    width: 80%;
  }
  
  .nav-link.active .nav-indicator {
    width: 0;
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
  
  @media (min-width: 768px) {
    .mobile-menu-btn {
      display: none;
    }
  }
  
  .mobile-menu-btn:hover {
    background: rgba(148, 163, 184, 0.1);
  }
  
  /* Hamburger Animation */
  .hamburger {
    width: 24px;
    height: 18px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .hamburger span {
    display: block;
    height: 2px;
    width: 100%;
    background: #94a3b8;
    border-radius: 1px;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  .hamburger.open span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
    background: #f59e0b;
  }
  
  .hamburger.open span:nth-child(2) {
    opacity: 0;
    transform: translateX(20px);
  }
  
  .hamburger.open span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
    background: #f59e0b;
  }
  
  /* Mobile Navigation */
  .mobile-nav {
    display: block;
    padding: 1rem;
    background: rgba(30, 41, 59, 0.95);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(148, 163, 184, 0.1);
  }
  
  @media (min-width: 768px) {
    .mobile-nav {
      display: none;
    }
  }
  
  .mobile-nav-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin: 0.25rem 0;
    border-radius: 12px;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: #94a3b8;
    transition: all 0.3s ease;
    border: 1px solid transparent;
  }
  
  .mobile-nav-link:hover {
    color: #f1f5f9;
    background: rgba(148, 163, 184, 0.1);
    border-color: rgba(148, 163, 184, 0.2);
    transform: translateX(4px);
  }
  
  .mobile-nav-link.active {
    color: #1e293b;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    border-color: #f59e0b;
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
  }
  
  .mobile-nav-text {
    font-size: 1rem;
  }
  
  .mobile-nav-icon {
    transition: transform 0.3s ease;
  }
  
  .mobile-nav-link:hover .mobile-nav-icon {
    transform: translateX(4px);
  }
  
  .mobile-nav-link.active .mobile-nav-icon {
    color: #1e293b;
  }
  
  /* Animations */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scaleY(1);
    }
    50% {
      opacity: 0.7;
      transform: scaleY(0.8);
    }
  }
  
  /* Smooth scrolling for anchor links */
  :global(html) {
    scroll-behavior: smooth;
  }
  
  /* Custom scrollbar for webkit browsers */
  :global(::-webkit-scrollbar) {
    width: 8px;
  }
  
  :global(::-webkit-scrollbar-track) {
    background: #1e293b;
  }
  
  :global(::-webkit-scrollbar-thumb) {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    border-radius: 4px;
  }
  
  :global(::-webkit-scrollbar-thumb:hover) {
    background: linear-gradient(135deg, #d97706, #b45309);
  }
</style>