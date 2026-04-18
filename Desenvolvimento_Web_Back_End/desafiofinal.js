// Desafio Final: O Pequeno Sistema de Cadastro

let nomeProduto = "Notebook"
let preco = 3500.99
let quantidadeEstoque = 12
let produtoDisponivel = true

console.log(`O produto ${nomeProduto} custa ${preco} e possui ${quantidadeEstoque} em estoque. Está disponível? ${produtoDisponivel}.`)

console.log(typeof nomeProduto)             // string
console.log(typeof preco)                   // number
console.log(typeof quantidadeEstoque)      // number
console.log(typeof produtoDisponivel)      // boolean

// Ou pode ser desta forma também a resolução do desafio:

let nomeProduto2 = "Notebook"
let preco2 = 3500.99
let quantidadeEstoque2 = 12
let produtoDisponivel2 = true

console.log(`O produto é ${nomeProduto2} e o tipo da variável é`, typeof nomeProduto2)
console.log(`O produto é ${preco2} e o tipo da variável é`, typeof preco2)
console.log(`O produto é ${quantidadeEstoque2} e o tipo da variável é`, typeof quantidadeEstoque2)
console.log(`O produto é ${produtoDisponivel2} e o tipo da variável é`, typeof produtoDisponivel2)