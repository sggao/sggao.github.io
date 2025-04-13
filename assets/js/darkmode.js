// (function () {
//   function enableDark() {
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   }

//   function disableDark() {
//     document.documentElement.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   }

//   function toggleDarkMode() {
//     if (document.documentElement.classList.contains("dark")) {
//       disableDark();
//     } else {
//       enableDark();
//     }
//   }

//   function setupButton() {
//     const toggle = document.createElement("button");
//     toggle.innerHTML = "🌓";
//     toggle.id = "dark-toggle";
//     toggle.title = "Toggle dark mode";
//     document.body.appendChild(toggle);
//     toggle.addEventListener("click", toggleDarkMode);
//   }

//   document.addEventListener("DOMContentLoaded", function () {
//     if (localStorage.getItem("theme") === "dark") {
//       enableDark();
//     }
//     setupButton();
//   });
// })();
document.addEventListener("DOMContentLoaded", function () {
  // 如果已存在按钮，就不再添加（防止重复）
  if (document.getElementById("dark-toggle")) return;

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
