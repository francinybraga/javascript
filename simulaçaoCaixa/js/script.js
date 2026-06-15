let readline = require("readline-sync");
const supermercado = {
  categorias: [],
  subcategorias: [],
  produtos: [],
  vendas: [],
  fornecedores: [],
  clientes: [],
};

function cadastroCategoria() {
  let nomeCategoria = readline
    .question("Digite o nome da categoria: ").trim().toUpperCase();

  if (nomeCategoria.length === 0) {
    console.log("Nome para categoria invalido.");
    return;
  }

  if (!/^[A-ZÀ-Ú\s]+$/.test(nomeCategoria)) {
    console.log("A categoria deve conter apenas letras.");
    return;
  }

let categoriaExiste = null

for (let categoria of supermercado.categorias) {
    if (categoria.nome === nomeCategoria) {
        categoriaExiste = categoria;
        break;
    }
}

  if (categoriaExiste) {
    console.log("Essa categoria já está cadastrada.");
    return;
  }

  supermercado.categorias.push({
    id: supermercado.categorias.length + 1,
    nome: nomeCategoria,
  });
    console.log("Categoria cadastrada com sucesso!");
}

function adicionarProduto(adicionar) {
    for(let i = 0; i < supermercado.categorias.length; i++) {
        console.log(supermercado.categorias[i])
    }
    console.log(`${supermercado.categorias}`)
    let adicionarProduto = readline.questionInt('Digite em qual categoria deseja adicionar o produto. ')
    let nomeProduto = readline.question('Digite o nome do produto: ')
    supermercado.produtos.push(nomeProduto)
    console.log('lista de nome',supermercado.produtos[0])
    return adicionarProduto
}
console.log(supermercado.categorias)

let cadastro = false;
while (!cadastro) {
  cadastro = readline.keyInYN("Deseja cadastrar um produto? ");
  switch (cadastro) {
    case true:
        cadastroCategoria()
        while(!adicionarProduto()) {
        adicionarProduto(adicionarProduto)
    }
      break;
    case false:
      break;
    default:
      console.log("Digite um opcao valida.");
  }

}

// supermercado.categorias.push({
//   id: 1,
//   nome: "Limpeza",
// });

// supermercado.subcategorias.push({
//   id: 1,
//   categoriasId: 1,
//   nome: "Amaciante",
// });

// supermercado.produtos.push({
//   id: 1,
//   categoriaId: 1,
//   subcategoriaId: 1,
//   nome: "Amaciante Fofo Concentrado 2L Lavanda ",
//   marca: "Fofo",
//   preco: 15.99,
//   estoque: 20
// });

// supermercado.produtos.push({
//   id: 1,
//   categoriaId: 1,
//   subcategoriaId: 1,
//   nome: "Amaciante Fofo Concentrado 2L Floral ",
//   marca: "Fofo",
//   preco: 15.99,
//   estoque: 10
// });

// supermercado.produtos.push({
//   id: 1,
//   categoriaId: 1,
//   subcategoriaId: 1,
//   nome: "Amaciante Fofo Concentrado 2L Lavanda ",
//   marca: "Fofo",
//   preco: 15.99,
//   estoque: 20
// });

// supermercado.produtos.push({
//   id: 1,
//   categoriaId: 1,
//   subcategoriaId: 1,
//   nome: "Amaciante Fofo Concentrado 2L Lavanda ",
//   marca: "Fofo",
//   preco: 15.99,
//   estoque: 20
// });

// supermercado.produtos.push({
//   id: 1,
//   categoriaId: 1,
//   subcategoriaId: 1,
//   nome: "Amaciante Fofo Concentrado 2L Lavanda ",
//   marca: "Fofo",
//   preco: 15.99,
//   estoque: 20
// });

// supermercado.produtos.push({
//   id: 1,
//   categoriaId: 1,
//   subcategoriaId: 1,
//   nome: "Amaciante Fofo Concentrado 2L Lavanda ",
//   marca: "Fofo",
//   preco: 15.99,
//   estoque: 20
// });
// supermercado.produtos.push({
//   id: 1,
//   categoriaId: 1,
//   subcategoriaId: 1,
//   nome: "Amaciante Fofo Concentrado 2L Lavanda ",
//   marca: "Fofo",
//   preco: 15.99,
//   estoque: 20
// });

// supermercado.produtos.push({
//   id: 1,
//   categoriaId: 1,
//   subcategoriaId: 1,
//   nome: "Amaciante Fofo Concentrado 2L Lavanda ",
//   marca: "Fofo",
//   preco: 15.99,
//   estoque: 20
// });

// supermercado.produtos.push({
//   id: 1,
//   categoriaId: 1,
//   subcategoriaId: 1,
//   nome: "Amaciante Fofo Concentrado 2L Lavanda ",
//   marca: "Fofo",
//   preco: 15.99,
//   estoque: 20
// });
