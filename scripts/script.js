const botao = document.getElementById('botao-tema');
const body = document.body;

function aplicarTema(escuro) {
  body.classList.toggle('escuro', escuro);
  botao.innerHTML = escuro
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
  localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
}

const temaSalvo = localStorage.getItem('tema') === 'escuro';
aplicarTema(temaSalvo);

botao.addEventListener('click', () => {
  const escuro = !body.classList.contains('escuro');
  aplicarTema(escuro);
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});
