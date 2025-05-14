<script>
  // Import the image URL from the assets folder
  export let profileImageUrl = "../src/lib/assets/images/sekey1.JPG";
</script>



<div class="card">
    <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGltYWdlfGVufDB8fHx8MTY5MjQ1NzE3Ng&ixlib=rb-4.0.3&q=80&w=1080"
     alt="Placeholder" />
     <div class ="profile">
        <img src= {profileImageUrl}
        style="width: 100%; height: 100%; object-fit: cover;"
         alt="Placeholder" />

     </div>
    <div class="card-content">
      <h2 class="h2">Elikem Sek</h2>
      <p class="desc">A passionate Mobile & Web App Dev</p>
      <p class="desc2">I believe in Solving problems and there's solution to every problem on this earth</p>
    </div>
  </div>
  
  <style>
    .profile {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(175, 57, 57, 0.2);
    }
    .desc2 {
    
      color: white;
      font-size: 11px;
      font-family:fantasy;
      text-align: center;
      text-align: end;
    }
    .desc {
      color: white;
      font-size: 15px;
      font-family:fantasy;
      text-align: center;
      margin-top: 10px;
    }
    .h2 {
      color: white;
      font-size: 50px;
      font-family:fantasy;
      text-align: center;
      margin-top: 20px;
    }
    .card {
      position: relative;
      width: 300px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(175, 57, 57, 0.2);
      margin: 20px auto;
      transition: transform 0.3s;
      
    }
  
    .card img {
      border-top-right-radius: 100px;

      width: 100%;
      height: 250px;
      object-fit: cover;
      opacity: 0.9; /* Makes text more readable */
    }
  
    .card-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 20px;
      background: linear-gradient(
        to top, 
        rgba(237, 40, 40, 0.7) 0%, 
        transparent 100%
      );
      color: white;
    }
  </style>