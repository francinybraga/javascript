console.log("--------------OBJETOS----------------");
let pessoa = {
  nome: "Maria",
  idade: 25,
  apresentar: function () {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  },
  cidade: "Jaraguá do Sul",
};
console.log(pessoa.nome);
console.log(pessoa.apresentar());
pessoa.idade = 26;
pessoa.profissao = "Veterinária";
// delete pessoa.cidade
console.log(pessoa);

let carro = {
  marca: "Gol",
  modelo: "Gol Bolinha",
  ano: "2015",
};
console.log(`Modelo do carro: ${carro.modelo}`);

pessoa.cidade = {
  endereco: {
    rua: "Deodoro da Fonseca",
    numero: 45,
    bairro: "centro",
  },
};
console.log(pessoa.cidade.endereco.rua);
console.log(Object.keys(pessoa)); // Object.keys retorna um array com as chaves de um objeto.
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa)); // Object.entries retorna um array com os pares chave-valor de um objeto.

let obj1 = { 1: 1, 2: 2, 3: 3, 4: 4 };
let obj2 = { 5: 5, 6: 6, 7: 7, 8: 8 };
console.log(Object.assign(obj1, obj2)); // Object.assign é usado para copiar as propriedades de um ou mais objetos para um objeto de destino. Ele retorna o objeto de destino.
console.log(Object.values(obj1, obj2)); // Object.values retorna um array com os valores das propriedades de um objeto.
console.log(pessoa.hasOwnProperty("idade")); // hasOwnProperty verifica se a propriedade existe no objeto, mesmo que o valor seja undefined.
// Object.freeze(pessoa);
pessoa.idade = 20;
console.log(pessoa.idade); // Object.freeze impede que o valor seja alterado, mesmo que a propriedade exista.
let produto = {
  nome: "Radio",
  preco: 500,
  estoque: 10,
};
for (let propriedade in produto) {
  console.log(`${propriedade}: ${produto[propriedade]}`); // for...in é usado para iterar sobre as propriedades de um objeto. Ele retorna as chaves do objeto, e para acessar os valores, usamos a notação de colchetes.
}
let usuario = {
  login: "Adm",
  senha: "1234",
};
Object.defineProperty(pessoa, "salario", {
  // dentro de Object.defineProperty coloca o objeto (pessoa) e a propriedade que deseja adicionar (salario), e depois um objeto com as características da propriedade.
  value: 3000,
  writable: true,
  enumerable: false, // enumerable: false impede que a propriedade seja listada quando usamos Object.keys ou for...in, mas ainda permite que a propriedade seja acessada e modificada.
  configurable: true,
});
Object.defineProperty(pessoa, "CPF", {
  value: "123.456.789-00",
  enumerable: true,
  writable: false,
  configurable: false,
});
console.table(pessoa);

let config = {
  tema: JSON.stringify({
    cor: "azul",
    fonte: "Arial",
  }),
  idioma: JSON.stringify({
    linguagem: "Português",
    pais: "Brasil",
  }),
};
console.log(JSON.parse(config.tema));

console.log("--------------ARRAY----------------");

let numeros = [1, 2, 3, 4, 5];
console.log(numeros[2]);
numeros.push(6);
console.log(numeros);
numeros.pop();
console.log(numeros);
numeros.unshift(0);
console.log(numeros);
numeros.shift();
console.log(numeros);
numeros.splice(1, 1);
console.log(numeros);
numeros.splice(1, 0, 10, 11); //
console.log(numeros);
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas.indexOf("banana"));
console.log(frutas.includes("uva"));
console.log(frutas.concat(numeros)); // concat é usado para concatenar dois ou mais arrays, retornando um novo array.
console.log(...frutas, ...numeros); // operador spread é usado para espalhar os elementos de um array em outro array.
numeros.forEach((n) => {
  console.log(n * 2);
});
numeros.map((n) => {
  console.log(n ** 2);
});
numeros
  .filter((n) => n % 2 === 0)
  .forEach((n) => {
    console.log(n);
  });
let soma = numeros.reduce((acumulador, n) => acumulador + n, 0);
console.log(soma);

console.log(numeros.find((n) => n > 3));
console.log(numeros.some(n => n < 0))
console.log(numeros.every(n => n > 0))
console.log(numeros.sort((a,b) => a - b))
console.log(numeros.sort((a,b) => b - a))
console.log(numeros.reverse())

let alunos ={
    aluno1:{
        nome: "João",
        nota: 7
    }, 
    aluno2:{
        nome: "Maria",
        nota: 9
    },
    aluno3:{
        nome: "Pedro",
        nota: 5
    }
}
Object.values(alunos).filter(aluno => aluno.nota > 6).forEach(aluno => console.log(aluno.nome))
console.log(Object.values(alunos).map(aluno => aluno.nome))
console.log(Object.values(alunos).reduce((acumulador, aluno) => acumulador + aluno.nota / Object.values(alunos).length, 0))
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matriz[1][1])
console.log(matriz.flat())
console.log(frutas.join(" , "))
console.log(frutas.split(" , "))