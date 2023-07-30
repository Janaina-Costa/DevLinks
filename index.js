const toggleMode = () => {
  const btn = document.querySelector("#switch");
  const page = document.querySelector("html");

  btn.addEventListener("click", () => page.classList.toggle("light"));
};

toggleMode();
