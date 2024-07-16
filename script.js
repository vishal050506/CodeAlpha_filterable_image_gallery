document.addEventListener("DOMContentLoaded", () => {
  const fbuttons = document.querySelectorAll(".filter-buttons button");
  const fcards = document.querySelectorAll(".filter-cards .card");

  fbuttons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.getAttribute("data-item");
      fcards.forEach((card) => {
        if (item === "all" || card.getAttribute("data-name") === item) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
      fbuttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});
