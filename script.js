const bookAppointMentBtn = document.querySelector(".small-btn");
const focusElement = document.getElementById("name-input");

bookAppointMentBtn.addEventListener('click', () => {
    focusElement.scrollIntoView({ behavior: "smooth", block: "center" });
    focusElement.focus();
});
