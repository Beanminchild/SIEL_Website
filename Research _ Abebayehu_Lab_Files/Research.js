function setupResearchPage() {
  const page = document.querySelector(".siel-research");
  if (!page) return;

  const header = page.querySelector(".siel-header");
  const toggles = page.querySelectorAll(".siel-nav-toggle");
  const navigation = header?.querySelector(".siel-nav-links");

  if (!header || !toggles.length || !navigation) return;

  page.classList.add("js-ready");
  header.classList.add("js-ready");

  const setMenuOpen = (isOpen) => {
    toggles.forEach((toggle) => {
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "Close" : "Menu";
    });
    navigation.classList.toggle("is-open", isOpen);
  };

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuOpen(false);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupResearchPage);
} else {
  setupResearchPage();
}