const toggle = document.getElementById("menu-toggle");
  const navItems = document.getElementById("nav-items");

  toggle.addEventListener("click", () => {
    navItems.classList.toggle("show");
  });