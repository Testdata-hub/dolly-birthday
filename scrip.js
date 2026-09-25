const openBtn = document.getElementById("openBtn");

const opening = document.getElementById("opening");

const birthday = document.getElementById("birthday");

const wishBtn = document.getElementById("wishBtn");

const wishMessage = document.getElementById("wishMessage");


/*
   Open birthday surprise
*/

openBtn.addEventListener("click", () => {

    opening.style.display = "none";

    birthday.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createHeartBurst();

});


/*
   Birthday wish button
*/

wishBtn.addEventListener("click", () => {

    wishMessage.classList.remove("hidden");

    wishBtn.innerText = "Wish Made ❤️";

    createHeartBurst();

    createConfetti();

});


/*
   Floating hearts
*/

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "✨"
    ];

    heart.innerText =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        15 + Math.random() * 25 + "px";

    heart.style.animationDuration =
        5 + Math.random() * 5 + "s";

    document.body.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 10000);

}


/*
   Start floating hearts
*/

setInterval(createHeart, 700);


/*
   Heart burst
*/

function createHeartBurst() {

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 70);

    }

}


/*
   Simple confetti
*/

function createConfetti() {

    const symbols = [
        "✨",
        "🎉",
        "💖",
        "💕",
        "🌸",
        "⭐"
    ];

    for (let i = 0; i < 40; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerText =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-30px";

        confetti.style.fontSize =
            15 + Math.random() * 20 + "px";

        confetti.style.zIndex = "999";

        confetti.style.pointerEvents =
            "none";

        document.body.appendChild(confetti);


        const duration =
            2000 + Math.random() * 3000;


        confetti.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)"
                },

                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`
                }
            ],

            {
                duration: duration,

                easing: "ease-out"
            }

        );


        setTimeout(() => {

            confetti.remove();

        }, duration);

    }

}
