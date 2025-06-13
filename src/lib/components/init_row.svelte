<script lang="ts">
  import Socials from "./socials.svelte";
  import { fade, fly } from 'svelte/transition';
  
  const profileImage = "https://i.ibb.co/Mkn5nRxn/eli.png";
  const  backgroundImage = "https://i.ibb.co/nsQgPvZb/sekey1.jpg";
</script>

<section class="hero-container pure-white">
  <!-- Content -->
  <div class="content">
    <!-- Profile -->
    <div class="profile">
      <img 
        src={profileImage} 
        alt="Elikem Sek" 
        class="profile-img"
        in:fade={{ delay: 500, duration: 3000 }}
      />
    </div>
    <!-- Name -->
    <div class="name">
      <h1 
        class="name-primary"
        in:fly={{ y: 30, duration: 800, delay: 500 }}
      >
        Elikem
      </h1>
      <h2 
        class="name-secondary"
        in:fly={{ y: 30, duration: 800, delay: 700 }}
      >
        Sek.
      </h2>
      <div 
        class="accent-line"
        in:fade={{ delay: 900, duration: 600 }}
      ></div>
    </div>
    <!-- Socials -->
    <div 
      class="socials"
      in:fade={{ delay: 1100, duration: 800 }}
    >
      <Socials />
    </div>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  
  .hero-container {
    position: relative;
    width: 100%;
    height: 16rem;
    background: #fff;
    overflow: hidden;
  }
  
  @media (min-width: 768px) {
    .hero-container {
      height: 20rem;
    }
  }
  
  /* Image with Blend Effect */
  .image-wrapper {
    position: absolute;
    inset: 0;
  }
  
  .hero-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(1.1) contrast(1.1);
  }
  
  .image-blend {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 60%,
      rgba(255, 255, 255, 0.3) 80%,
      rgba(255, 255, 255, 0.8) 95%,
      #fff 100%
    );
  }
  
  /* Content Layout */
  .content {
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }
  
  @media (min-width: 1024px) {
    .content {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      padding: 2rem;
    }
  }
  
  /* Profile */
  .profile-img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(59, 130, 246, 0.2);
    box-shadow: 
      0 0 20px rgba(59, 130, 246, 0.1),
      0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
  }
  
  .profile-img:hover {
    box-shadow: 
      0 0 30px rgba(59, 130, 246, 0.2),
      0 12px 40px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  @media (min-width: 768px) {
    .profile-img {
      width: 4rem;
      height: 4rem;
    }
  }
  
  /* Name Section */
  .name {
    flex: 1;
    color: #1f2937;
  }
  
  @media (min-width: 1024px) {
    .name {
      text-align: center;
    }
  }
  
  .name-primary,
  .name-secondary {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    line-height: 0.9;
    margin: 0;
    color: #1f2937;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .name-primary {
    font-size: 2.5rem;
    margin-bottom: 0.25rem;
  }
  
  .name-secondary {
    font-size: 2.5rem;
    color: #4b5563;
  }
  
  @media (min-width: 768px) {
    .name-primary,
    .name-secondary {
      font-size: 3.5rem;
    }
  }
  
  .accent-line {
    width: 3rem;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #06b6d4);
    margin-top: 1rem;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
    animation: slideIn 0.6s ease-out forwards;
  }
  
  @media (min-width: 1024px) {
    .accent-line {
      margin: 1rem auto 0;
    }
  }
  
  /* Socials */
  .socials {
    align-self: flex-start;
  }
  
  @media (min-width: 1024px) {
    .socials {
      align-self: center;
    }
  }
  
  @keyframes slideIn {
    from { 
      width: 0;
      opacity: 0;
    }
    to { 
      width: 3rem;
      opacity: 1;
    }
  }
  
  .hero-container.pure-white {
    background: #fff;
  }
  .image-wrapper, .hero-bg, .image-blend { display: none !important; }
  .name, .name-primary, .name-secondary, .accent-line {
    color: #1f2937 !important;
    text-shadow: none !important;
  }
</style>