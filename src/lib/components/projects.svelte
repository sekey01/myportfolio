<script lang="ts">
	import Card from "./card.svelte";


   let projects =[
    {
        title: "MealMate Delivery App",
        author: "Elikem Sek",
        description: "A mobile app for food delivery, allowing users to order meals from local restaurants.",
        imageUrl:"https://media-hosting.imagekit.io/21c691b9e9ea435c/logo.png?Expires=1841859031&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FsauN6vWR~tVCtbyNCwubpv4ZMwjViSKO1svIqtEN4~2XA~gvzw9ZitJk8KGsTF8Qa76kldnsViq1wR6WsNwhCmEZK-eSxo3lZ52ePxs14eUbJSuIO9unpQUjkW9us3zU3l1hA34dvxpgTORtOcGPU52jgndp2jJn0WEJZw5VD3e9ZBXywA7vArkXuZcFuqIXLYhnXfbq-Fhnxxe9QSZ1eRirPgnzYluyQgM5tCF~JbpuJKSpt6djR1MObvR~zDHBajoAMBZoKDweH47AZ6w5QeU5I9-lJPSQOavNNF8VOh0Q5yaJTU2nrvBUiPdfhNAQbuZER29xR2cV87E~4q11w__"
        
    },
    {
        title: "KW-Machines",
        author: "Elikem Sek",
        description: "A web app for managing and tracking machine operations.",
        imageUrl:"https://media-hosting.imagekit.io/9daa17777f974dc0/machine.jpeg?Expires=1841859031&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XCzixs6f4JisN2CXIUjfkXcC6pewS1CHC-9V6eU-Aq~4e0M78FxxM2nXnAZWLfVgOkVDKVlQurrmmpQA9UZ5rHMt9Cc1ShzfDNpdveXMY9qy9PBnHVZH2wTvPX1CLQjM7s1RlXUq9kPtu2upUqsm32-kU8k7hoTwosTMl2H9e4ULPic6ILl3Z93CnakawH8gCiURd21bUt~M-ccEOj9p4pBQnX7~luN~54AFZcB-1HUT3S97vbfI8363qf4JZWDX-Ez3X50SgDh0ci-n8ZwP4mdEBlYoii4AK~vI0yyfANtZowSEToXl8NotmF5r~uuozj0vt1xNvSlo5aTtGUqmIg__"
    
    },

    {
        title: "Exeat Keeper App(Android)",
        author: "Elikem Sek",
        description: "A mobile app for managing and tracking senior high school students in and off Campus.",
        imageUrl:"https://media-hosting.imagekit.io/e48d3aa3ff7d4eb1/exeat.png?Expires=1841859031&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pEjyNpU3bowIQ3rIENKdpQvWY2DNvTQqVm7YFKZ2~cxwnq4wPJoX0RG3dBfLPieB5E~LSEbILVKyjPubs7ArsSRrrVzuXXYyKoGl6KR7AzKKrehlfCZgrVJGNK0MUhxcEdZwEe6e86rGbvFqtp-38XGr0dElYNdY7tWBpi-qw1kQsue8XdxsB6i4yq4bEOmZAlsEijYvK18vsWetJvHPFfPZ01wYUimsuKQfnyQevem8yPjSPRmV65Nml~DMc73lO6I51hFXaFpTEx7CDPc2PVMoxGkHPM2EKfIfH0Z8-zmZT1K-jE0Zi4w2Q1fwzj5xyY8Y77QRJT~S~uSUSwyOWA__"
    }

   ]

</script>
<div class="flex flex-col items-center gap-10 ">
    <h2 class="text-6xl font-bold">Projects</h2>
    <p class="text-2xl font-mono">A collection of projects that have influenced my journey</p>
    <div class="books-container">
        {#each projects as project}
        
        <Card
            title={project.title}
            author={project.author}
            description={project.description}
            imageUrl={project.imageUrl}
        />
    
        {/each}
    </div>
</div>

   