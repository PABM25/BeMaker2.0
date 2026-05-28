export function initMobileMenu() {
  const mobileMenuBtns = document.querySelectorAll(".mobile-menu-btn");
  const headerNavs = document.querySelectorAll(".header-nav");

  mobileMenuBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (headerNavs[index]) {
        headerNavs[index].classList.toggle("active");
      }
    });
  });

  // Close menu when clicking a link
  headerNavs.forEach((nav) => {
    const links = nav.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });
  });
}
