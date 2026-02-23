// Questão 4 - Divisão de Conta no Restaurante
// Quatro amigos foram à um restaurante e a conta deu R$180,00. Eles querem dividir o valor igualmente.
// Além disso, decidiram deixar 10% de gorjeta sobre o valor total.
// Calcule:
// 1. O valor total da gorjeta.
// 2. Quanto cada pessoa deve pagar.

let valorConta = 180
let numeroPessoas = 4
let percentualGorgeta = 10

let valorGorjeta = (valorConta * percentualGorgeta)/100
let totalComGorjeta = valorConta + valorGorjeta
let valorPorPessoa = totalComGorjeta / numeroPessoas

console.log(`Total com gorjeta: R$ ${totalComGorjeta.toFixed(2)}`) // O .toFixed é usado para fixar a quantidade de casas decimais
console.log(`Cada pessoa paga: R$ ${valorPorPessoa.toFixed(2)}`)