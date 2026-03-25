// Scripts de comportamento da landing institucional.
// Responsabilidades: menu mobile, destaque de seção ativa e animações de entrada.

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
const sections = document.querySelectorAll("main section[id]");
const revealItems = document.querySelectorAll(".reveal");
const yearNode = document.getElementById("current-year");

// Mantém o ano do copyright sempre atualizado sem edição manual.
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

// Controle do menu mobile com sincronização de estado ARIA.
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("open");
  });

  // Ao clicar em links internos, fecha o menu para reduzir fricção em telas pequenas.
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("open");
    });
  });
}

// IntersectionObserver mantém animações leves sem escutar scroll continuamente.
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

// Marca o link ativo da navegação conforme a seção dominante no viewport.
const activeSectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          const href = link.getAttribute("href").replace("#", "");
          link.classList.toggle("active", href === sectionId);
        });
      }
    });
  },
  { rootMargin: "-30% 0px -55% 0px" }
);

sections.forEach((section) => activeSectionObserver.observe(section));
