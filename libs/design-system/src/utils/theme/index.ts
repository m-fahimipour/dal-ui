export function changeTheme() {
  if (window) {
    if (localStorage.getItem("theme") == "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    }
  }
}
