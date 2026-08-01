/* ==========================================
   Mushfiq Ahmad [R.A.]
   Main JavaScript File
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Loaded Successfully.");

    /* ==========================
       BACK TO TOP
    ========================== */

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {
                topBtn.style.display = "flex";
            } else {
                topBtn.style.display = "none";
            }

        });

        topBtn.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});


document.querySelectorAll(".copy-btn").forEach(button => {

    button.addEventListener("click", function () {

        const item = this.closest(".malfuzat-item");

        // Malfuzat Number
        const number = item.querySelector("h3").textContent.replace("🎤", "").trim();

        // Main Text
        const text = item.querySelector("p").innerText;

        // ID
        const id = item.id;

        // Current URL
        const url = window.location.origin +
                    window.location.pathname +
                    "#" +
                    id;

        // Volume Name
        const volume = document
    .querySelector(".volume-hero h2")
    .innerText
    .replace("Volume 1", "ভলিউম ১");

        const copyText =
`মালফুজাত ${number} | ${volume}

${text}

সূত্র:
${url}`;

navigator.clipboard.writeText(copyText)
.then(() => {

    this.innerHTML = "✅ কপি হয়েছে";

    setTimeout(() => {

        this.innerHTML = "📋 কপি করুন";

    }, 2000);

})
.catch(err => {

    console.error(err);

    alert("Copy Error: " + err);

});

    });

});