const fs = require('fs');
const {
    calcularQuantidadeTotal,
    calcularValorTotal,
    calcularPrecoMedioGeral
} = require('./funcoes');

// Lê o JSON
const vendas = JSON.parse(fs.readFileSync('./vendas.json', 'utf-8'));

// Processa os dados
const qtdeTotal = calcularQuantidadeTotal(vendas);
const valorTotal = calcularValorTotal(vendas);
const precoMedio = calcularPrecoMedioGeral(vendas);

// Exibe os resultados
console.log(`Quantidade Total Vendida: ${qtdeTotal}`);
console.log(`Valor Total em Vendas: R$ ${valorTotal.toFixed(2)}`);
console.log(`Preço Médio Geral: R$ ${precoMedio.toFixed(2)}`);
