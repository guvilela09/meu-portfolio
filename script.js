const barra = document.querySelector('.barra');

function animarBarra(progresso) {
  barra.style.width = `${progresso}%`;
}

animarBarra(0);
const intervalo = setInterval(() => {
  if (progresso < 100) {
    progresso++;
    animarBarra(progresso);
  } else {
    clearInterval(intervalo);
  }
}, 10);