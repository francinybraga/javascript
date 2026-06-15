// criar funçao criar categoria
// criar função adicionar produto dentro de uma categoria.
// criar um while com menu do que deseja fazer, criar categoria e adicionar produto dentro de uma categoria

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
    .question("Digite o nome da categoria: ")
    .trim()
    .toUpperCase();

  if (nomeCategoria.length === 0) {
    console.log("Nome para categoria invalido.");
    return;
  }

  if (!/^[A-ZÀ-Ú\s]+$/.test(nomeCategoria)) {
    console.log("A categoria deve conter apenas letras.");
    return;
  }

  let categoriaExiste = null;

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

function adicionarProduto() {
    if (supermercado.categorias.length === 0) {
    console.log("Nenhuma categoria cadastrada.");
    return;
  }
  for (const categoria of supermercado.categorias) {
    console.log(`${categoria.id} - ${categoria.nome}`);
  }
  let categoriaId = readline.questionInt(
    "Digite o numero do id da categoria que deseja adicionar o produto: ",
  );
  let nomeProduto = readline.question("Digite o nome do produto: ");
  supermercado.produtos.push({
    id: supermercado.produtos.length + 1,
    categoriaId: categoriaId,
    nome: nomeProduto,
  });
  console.log("Produto cadastrado com sucesso!");
}
function menu() {
  console.log(`
1) Cadastrar Categoria
2) Cadastrar Produto
3) Vizualizar Produtos
4) Vizualizar Categorias
0) Finalizar
        `);
}
function vizualizarCategoria() {
  for (const categoria of supermercado.categorias) {
    console.log(`${categoria.id} - ${categoria.nome}`);
  }
}
function vizualizarProduto() {
  for (const categoria of supermercado.categorias) {
    console.log(`${categoria.nome}`);
    for (const produto of supermercado.produtos) {
      if(produto.categoriaId === categoria.id) {
      console.log(`${produto.id} - ${produto.nome}`)
  }
    }
  }
}
do {
  menu();
  opcao = readline.questionInt("Digite uma opcao: ");

  switch (opcao) {
    case 1:
      cadastroCategoria();
      break;
    case 2:
      adicionarProduto();
      break;
    case 3:
      vizualizarProduto();
      break;
    case 4:
      vizualizarCategoria();
      break;
    case 0:
      console.log("saindo...");
      break;
    default:
      console.log("Digite uma opcao valida.");
      break;
  }
} while (opcao != 0);
