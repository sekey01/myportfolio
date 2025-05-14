<script>
     let title = "Follow";
     let description = "Follow me on all Social Media @";
     let imageUrl = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGltYWdlfGVufDB8fHx8MTY5MjQ1NzE3Ng&ixlib=rb-4.0.3&q=80&w=1080";
</script>
<div class="text-card">
    <img src={imageUrl} alt="Placeholder" style=" border-top-right-radius: 130px;
"/>
    <div class="text-card-content">
        <h2 class="h2">{title}</h2>
        
        <p class="desc">{description}</p>
    </div>
</div>
    <style>
        .desc{
            color: white;
            text-align: center;
            background-color: black;
            border-radius: 2rem;
            font-weight: bold;
            width: 250px;
            font-family: fantasy; 
            font-size: 12px;
            margin-top: 30px;
            border-top-right-radius: 130px;

        }
        .h2{
            position: absolute;
            top: 1px;
            color: black;
            text-align: center;
            background-color: white;
            border-radius: 2rem;
            font-weight: bold;
            width: 100px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
        .text-card {
            height: 100px;
            position: relative;
            width: 300px;
            border-radius: 8px;
            overflow: hidden;
        }

        .text-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            opacity: 0.9; /* Makes text more readable */
        }

        .text-card-content {
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
