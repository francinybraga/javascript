let jogoAcabou = false;

function gerarMinas(qtd = 4, tamanho = 25) {
  let minas = [];

  while (minas.length < qtd) {
    let num = Math.floor(Math.random() * tamanho);
    if (!minas.includes(num)) minas.push(num);
  }

  return minas;
}

let minas = gerarMinas();
let totalMinas = minas.length;
let casasSeguras = 25 - totalMinas;
let abertas = 0;

let tabuleiro = document.getElementById("tabuleiro");

let somExplosao = new Audio("assets/aud/explosao.mp3");
somExplosao.volume = 0.5;

// criar tabuleiro
for (let i = 0; i < 25; i++) {
  let casa = document.createElement("div");

  casa.classList.add("casa");
  casa.dataset.posicao = i;

  casa.addEventListener("click", clicar);

  tabuleiro.appendChild(casa);
}

function clicar() {
  if (jogoAcabou) return;

  let posicao = Number(this.dataset.posicao);

  if (minas.includes(posicao)) {

    this.innerHTML = "💣";
    this.classList.add("bomba");
    this.style.backgroundColor = "red";

    jogoAcabou = true;

    let titulo = document.querySelector("h1");
    titulo.innerHTML = "☠️ GAME OVER ☠️";
    titulo.classList.remove("titulo");
    titulo.classList.add("fim");

    somExplosao.currentTime = 0;
    somExplosao.play();

    setTimeout(reiniciar, 5000);

  } else {

    this.style.backgroundColor = "white";
    this.style.pointerEvents = "none";

    abertas++;

    if (abertas === casasSeguras) {

      jogoAcabou = true;

      let titulo = document.querySelector("h1");
      titulo.innerHTML = "🏆 VOCÊ VENCEU! 🏆";
      titulo.classList.remove("titulo");
      titulo.classList.add("fim");

      setTimeout(reiniciar, 5000);
    }
  }
}

let botao = document.getElementById("reiniciar");
botao.addEventListener("click", reiniciar);

function reiniciar() {
  location.reload();
}

function criarBombas() {
  setInterval(() => {
    let bomba = document.createElement("div");

    bomba.innerHTML = "💣";
    bomba.classList.add("bomba-fundo");

    bomba.style.left = Math.random() * window.innerWidth + "px";
    bomba.style.animationDuration = 3 + Math.random() * 5 + "s";
    bomba.style.fontSize = 20 + Math.random() * 30 + "px";

    document.body.appendChild(bomba);

    setTimeout(() => {
      bomba.remove();
    }, 8000);

  }, 300);
}

criarBombas();