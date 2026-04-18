// Questão 3 - Desconto em Compra
// Uma loja está oferecendo 15% de desconto em todos os produtos. Um cliente quer comprar um produto que custa R$200,00.
// Calcule:
// 1. O valor do desconto.
// 2. O preço final do produto.

let precoOriginal = 200
let percentualDesconto = 15

let valorDesconto = (precoOriginal * percentualDesconto)/100
let precoFinal = precoOriginal - valorDesconto

console.log(`Desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`)