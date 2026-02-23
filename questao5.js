// Questão 5 - Aumento Salarial
// Carlos ganha R$2.500,00 por mês. Ele recebeu um aumento de 12% no salário.
// Calcule:
// 1. O valor do aumento.
// 2. O novo salário de Carlos.
// 3. Quanto a mais ele vai receber por ano (considere 12 meses).

let salarioAtual = 2500
let percentualAumento = 12

let valorAumento = (salarioAtual * percentualAumento)/100
let novoSalario = salarioAtual + valorAumento
let aumentoAnual = valorAumento * 12

console.log(`Aumento mensal: R$ ${valorAumento.toFixed(2)}`)
console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`)
console.log(`Aumento anual: R$ ${aumentoAnual.toFixed(2)}`)