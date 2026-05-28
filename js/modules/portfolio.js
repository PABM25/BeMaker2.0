export function initPortfolio() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (filterBtns.length > 0 && portfolioItems.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all
        filterBtns.forEach((b) => b.classList.remove("active"));
        // Add active class to clicked
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        portfolioItems.forEach((item) => {
          // Add small delay to allow CSS transitions if needed
          item.style.opacity = "0";

          setTimeout(() => {
            if (
              filterValue === "all" ||
              item.getAttribute("data-category").includes(filterValue)
            ) {
              item.classList.remove("hidden");
              setTimeout(() => {
                item.style.opacity = "1";
              }, 50);
            } else {
              item.classList.add("hidden");
            }
          }, 300);
        });
      });
    });
  }
}
