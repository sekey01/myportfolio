<script lang="ts">
  import Socials from "./socials.svelte";
  import { fade, fly } from 'svelte/transition';
  
  const backgroundImage = "https://i.ibb.co/Mkn5nRxn/eli.png";
  const profileImage = "https://i.ibb.co/nsQgPvZb/sekey1.jpg";
</script>

<section class="hero-container">
  <!-- Background Image -->
  <img 
    src={backgroundImage} 
    alt="Background" 
    class="hero-bg"
  />
  
  <!-- Content Overlay -->
  <div class="content-overlay">
    <div class="content-wrapper">
      
      <!-- Profile Section -->
      <div class="profile-section">
        <img 
          src={profileImage} 
          alt="Elikem Sek" 
          class="profile-image"
          width="60" 
          height="60"
          in:fade={{ delay: 200, duration: 800 }}
        />
      </div>
      
      <!-- Name Section -->
      <div class="name-section">
        <h1 
          class="name-text"
          in:fly={{ y: -20, duration: 600, delay: 300 }}
        >
          Elikem
        </h1>
        <h2 
          class="name-text"
          in:fly={{ y: -20, duration: 600, delay: 450 }}
        >
          Sek.
        </h2>
        <div 
          class="underline"
          in:fade={{ delay: 600 }}
        ></div>
      </div>
      
      <!-- Social Links Section -->
      <div 
        class="socials-section"
        in:fade={{ delay: 800 }}
      >
        <Socials />
      </div>
      
    </div>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
  
  /* Hero Container */
  .hero-container {
    position: relative;
    width: 100%;
    height: 16rem; /* 64px * 4 = 256px */
    background-color: #f3f4f6;
    overflow: hidden;
  }
  
  @media (min-width: 768px) {
    .hero-container {
      height: 150px;
    }
  }
  
  /* Background Image */
  .hero-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  /* Content Overlay */
  .content-overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0.25rem;
  }
  
  /* Content Wrapper */
  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    width: 100%;
    max-width: 100%;
  }
  
  @media (min-width: 640px) {
    .content-wrapper {
      gap: 0.75rem;
    }
  }
  
  @media (min-width: 768px) {
    .content-wrapper {
      gap: 1rem;
    }
  }
  
  @media (min-width: 1024px) {
    .content-wrapper {
      gap: 1.25rem;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
    }
  }
  
  /* Profile Section */
  .profile-section {
    display: flex;
    align-items: center;
  }
  
  .profile-image {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 2px solid #e5e7eb;
    transition: all 0.3s ease;
  }
  
  .profile-image:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
  
  @media (min-width: 640px) {
    .profile-image {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
  
  @media (min-width: 768px) {
    .profile-image {
      width: 4rem;
      height: 4rem;
    }
  }
  
  /* Name Section */
  .name-section {
    color: white;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  @media (min-width: 1024px) {
    .name-section {
      flex: 1;
      text-align: center;
    }
  }
  
  .name-text {
    font-size: 2.25rem;
    font-weight: 700;
    color: white;
    line-height: 1.1;
    font-family: 'Playfair Display', serif;
    letter-spacing: -0.025em;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    margin: 0;
  }
  
  @media (min-width: 768px) {
    .name-text {
      font-size: 3.75rem;
    }
  }
  
  /* Underline */
  .underline {
    height: 0.25rem;
    width: 2.5rem;
    background-color: #f59e0b;
    margin: 0.5rem 0;
    transform-origin: left;
    animation: scaleIn 0.8s ease-out forwards;
  }
  
  @media (min-width: 1024px) {
    .underline {
      margin: 0.5rem auto;
    }
  }
  
  /* Socials Section */
  .socials-section {
    display: flex;
    align-items: center;
    min-width: fit-content;
  }
  
  @media (min-width: 1024px) {
    .socials-section {
      justify-content: flex-end;
      flex-shrink: 0;
    }
  }
  
  /* Animations */
  @keyframes scaleIn {
    from { 
      transform: scaleX(0); 
    }
    to { 
      transform: scaleX(1); 
    }
  }
</style>