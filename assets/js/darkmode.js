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
// (function () {
(function () {
  // 防止重复执行
  if (window.__darkmode_injected__) return;
  window.__darkmode_injected__ = true;

  function enableDark() {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  function disableDark() {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  function toggleDarkMode() {
    if (document.documentElement.classList.contains("dark")) {
      disableDark();
    } else {
      enableDark();
    }
  }

  function setupButton() {
  if (document.getElementById("dark-toggle")) return;

  const toggle = document.createElement("button");
  toggle.id = "dark-toggle";
  toggle.innerHTML = "🌓";
  toggle.title = "Toggle dark mode";

  // ✅ 在插入按钮前直接设置内联样式，确保立即生效
  toggle.style.position = "fixed";
  toggle.style.bottom = "32px";
  toggle.style.right = "32px";
  toggle.style.zIndex = "9999";
  toggle.style.width = "52px";
  toggle.style.height = "52px";
  toggle.style.borderRadius = "50%";
  toggle.style.backgroundColor = "#f5f5f5";
  toggle.style.color = "#111";
  toggle.style.border = "none";
  toggle.style.fontSize = "1.5rem";
  toggle.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
  toggle.style.cursor = "pointer";
  toggle.style.lineHeight = "52px";
  toggle.style.textAlign = "center";

  document.body.appendChild(toggle);
  toggle.addEventListener("click", toggleDarkMode);
}


  document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "dark") {
      enableDark();
    }
    setupButton();
  });
})();


