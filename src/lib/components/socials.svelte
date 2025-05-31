<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Social Media Icons</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
    <style>
      

        .social-container {
            display: flex;
            gap: 20px;
            padding: 30px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .social-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .social-icon:hover {
            animation: bounce 0.6s ease;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .github {
            background: linear-gradient(45deg, #333, #24292e);
        }

        .whatsapp {
            background: linear-gradient(45deg, #25d366, #128c7e);
        }

        .instagram {
            background: linear-gradient(45deg, #e4405f, #833ab4, #fccc63);
        }

        .facebook {
            background: linear-gradient(45deg, #1877f2, #42a5f5);
        }

        @keyframes bounce {
            0%, 20%, 60%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-15px);
            }
            80% {
                transform: translateY(-7px);
            }
        }

        @media (max-width: 768px) {
            .social-container {
                gap: 15px;
                padding: 20px;
            }
            
            .social-icon {
                width: 45px;
                height: 45px;
                font-size: 18px;
            }
        }
    </style>
</head>
<body>
    <div class="social-container">
        <div class="social-icon github">
            <i class="fab fa-github"></i>
        </div>
        
        <div class="social-icon whatsapp">
            <i class="fab fa-whatsapp"></i>
        </div>
        
        <div class="social-icon instagram">
            <i class="fab fa-instagram"></i>
        </div>
        
        <div class="social-icon facebook">
            <i class="fab fa-facebook-f"></i>
        </div>
    </div>
</body>
</html>