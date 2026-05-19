let jogadorAtual = 1;

document.addEventListener("DOMContentLoaded", () => {

  document.body.dataset.jogador = jogadorAtual;

  const tabuleiro = document.getElementById("tabuleiro");

  const jogadorAtualText = document.getElementById("jogadorAtual");
  const p1Text = document.getElementById("p1");
  const p2Text = document.getElementById("p2");

  let valores = [];
  let cartasViradas = [];
  let bloqueado = false;

  let pontos = { 1: 0, 2: 0 };

  for (let i = 1; i <= 18; i++) {
    valores.push(i, i);
  }

  function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  embaralhar(valores);

  valores.forEach((valor) => {
    const carta = document.createElement("div");
    carta.classList.add("carta");
    carta.dataset.valor = valor;

    carta.addEventListener("click", () => virarCarta(carta));

    tabuleiro.appendChild(carta);
  });

  function virarCarta(carta) {
    if (bloqueado) return;
    if (carta.classList.contains("virada")) return;
    if (carta.classList.contains("encontrada")) return;

carta.classList.add("virada");

if (jogadorAtual === 1) {
  carta.classList.add("j1");
} else {
  carta.classList.add("j2");
}
carta.innerText = carta.dataset.valor;

    cartasViradas.push(carta);

    if (cartasViradas.length === 2) {
      bloqueado = true;
      setTimeout(verificarPar, 700);
    }
  }

function trocarJogador() {
  jogadorAtual = jogadorAtual === 1 ? 2 : 1;
  document.body.dataset.jogador = jogadorAtual;
  document.getElementById("jogadorAtual").innerText = `Vez: Jogador ${jogadorAtual}`;
}

  function atualizarPlacar() {
    p1Text.innerText = pontos[1];
    p2Text.innerText = pontos[2];
  }

  function verificarPar() {
    const [c1, c2] = cartasViradas;
    let acertou = false;
    if (c1.dataset.valor === c2.dataset.valor) {
      c1.classList.add("encontrada");
      c2.classList.add("encontrada");

     if (jogadorAtual === 1) {
      document.getElementById("p1").innerText =
        parseInt(document.getElementById("p1").innerText) + 1;
    } else {
      document.getElementById("p2").innerText =
        parseInt(document.getElementById("p2").innerText) + 1;
    }

    acertou = true;
  } else {
c1.classList.remove("virada", "j1", "j2");
c2.classList.remove("virada", "j1", "j2");

c1.innerText = "";
c2.innerText = "";
  }

    cartasViradas = [];
    bloqueado = false;
      if (!acertou) {
    trocarJogador();
  }
    verificarFimDeJogo();
  }
});
function criarNumeroCaindo() {
  const container = document.getElementById("background-rain");
  if (!container) return;

  const numero = document.createElement("div");
  numero.classList.add("numero");

  numero.innerText = Math.floor(Math.random() * 10);

  numero.style.left = Math.random() * window.innerWidth + "px";
  numero.style.animationDuration = (2 + Math.random() * 3) + "s";
  numero.style.fontSize = (12 + Math.random() * 20) + "px";

  const cores = ["#00bcd4", "#ff4081"];

  const cor1 = cores[Math.floor(Math.random() * cores.length)];
  const cor2 = cores[Math.floor(Math.random() * cores.length)];

  numero.style.textShadow = `
    0 0 5px ${cor1},
    0 0 15px ${cor2}
  `;

  container.appendChild(numero);

  setTimeout(() => {
    numero.remove();
  }, 5000);
}

setInterval(criarNumeroCaindo, 80);
function verificarFimDeJogo() {
  const cartasRestantes = document.querySelectorAll(".carta:not(.encontrada)");

  if (cartasRestantes.length === 0) {
    setTimeout(mostrarVencedor, 500);
  }
}
function mostrarVencedor() {
  const p1 = parseInt(document.getElementById("p1").innerText);
  const p2 = parseInt(document.getElementById("p2").innerText);

  let mensagem = "";

  if (p1 > p2) {
    mensagem = "🏆 Vencedor: Jogador 1";
  } else if (p2 > p1) {
    mensagem = "🏆 Vencedor: Jogador 2";
  } else {
    mensagem = "🤝 Empate!";
  }

  const tela = document.createElement("div");
  tela.id = "tela-vitoria";
  tela.innerText = mensagem;

  document.body.appendChild(tela);

  // confete
  const intervalo = setInterval(criarConfete, 50);

  // para depois de 5 segundos (evita travar)
  setTimeout(() => {
    clearInterval(intervalo);
  }, 5000);
}
function criarConfete() {
  const confete = document.createElement("div");

  confete.classList.add("confete");

  confete.style.left = Math.random() * window.innerWidth + "px";
  confete.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

  confete.style.animationDuration = (2 + Math.random() * 3) + "s";
  confete.style.opacity = Math.random();

  document.body.appendChild(confete);

  setTimeout(() => {
    confete.remove();
  }, 5000);
}