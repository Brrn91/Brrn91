const botao = document.getElementById("botao-tema");
const botaoMobile = document.getElementById("botao-tema-mobile");
const body = document.body;
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

function aplicarTema(escuro) {
  if (escuro) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
  
  const iconHTML = escuro
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
  
  if (botao) botao.innerHTML = iconHTML;
  if (botaoMobile) botaoMobile.innerHTML = iconHTML;
  
  localStorage.setItem("tema", escuro ? "escuro" : "claro");
}

const temaSalvo = localStorage.getItem("tema") === "escuro";
aplicarTema(temaSalvo);

if (botao) {
  botao.addEventListener("click", () => {
    const escuro = !body.classList.contains("dark");
    aplicarTema(escuro);
  });
}

if (botaoMobile) {
  botaoMobile.addEventListener("click", () => {
    const escuro = !body.classList.contains("dark");
    aplicarTema(escuro);
  });
}

// Mobile menu toggle
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const icon = mobileMenuBtn.querySelector("i");
    if (mobileMenu.classList.contains("hidden")) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    } else {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    }
  });
}

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    if (href && href !== "#") {
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
    // Close mobile menu after clicking a link
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
});
