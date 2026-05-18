let minas = [3, 7, 12, 18]
let tabuleiro = document.getElementById("tabuleiro")


for(let i = 0; i < 25; i++){

    let casa = document.createElement("div")

    casa.classList.add("casa")

    casa.dataset.posicao = i

    casa.addEventListener("click", clicar)

    tabuleiro.appendChild(casa)
}

function clicar(){

    let posicao = Number(this.dataset.posicao)

    if(minas.includes(posicao)){

        this.style.backgroundColor = "red"

        alert("BOOM 💣")

    }else{

        this.style.backgroundColor = "white"

    }
}