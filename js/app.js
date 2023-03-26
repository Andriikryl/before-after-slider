const container = document.querySelector(".container");
document.querySelector(".slider").addEventListener("input", (e) => {
  container.style.setProperty("--podition", `${e.target.value}%`);
});
