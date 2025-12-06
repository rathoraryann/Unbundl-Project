const track = document.querySelector('.slide-track');
let speed = 40; // lower = faster

track.style.animationDuration = speed + "s";



document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});
