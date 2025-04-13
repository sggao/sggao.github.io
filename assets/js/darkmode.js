document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.createElement("button");
  toggle.innerHTML = "🌓";
  toggle.id = "dark-toggle";
  toggle.title = "Toggle dark mode";
  document.body.appendChild(toggle);

  const enableDark = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  const disableDark = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };

  toggle.onclick = () => {
    document.documentElement.classList.contains("dark") ? disableDark() : enableDark();
  };

  if (localStorage.getItem("theme") === "dark") {
    enableDark();
  }
});
