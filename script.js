const fs = require('fs');
const {
    calcularQuantidadeTotal,
    calcularValorTotal,
    calcularPrecoMedioGeral,
    sumarizarPorData,
    sumarizarPorUF
} = require('./funcoes');

// Lê o JSON
const vendas = JSON.parse(fs.readFileSync('./vendas.json', 'utf-8'));

// Processa os dados
const qtdeTotal = calcularQuantidadeTotal(vendas);
const valorTotal = calcularValorTotal(vendas);
const precoMedio = calcularPrecoMedioGeral(vendas);

// Exibe o menu de opções
console.log('Escolha uma opção:');
console.log('1 - Sumarizar geral');
console.log('2 - Sumarizar por estado (UF)');
console.log('3 - Sumarizar por data');

// Lê a entrada do usuário
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite o número da opção desejada: ', (opcao) => {
    switch (opcao) {
        case '1':
            console.log('Sumarização Geral:');
            console.log(`Quantidade Total Vendida: ${calcularQuantidadeTotal(vendas)}`);
            console.log(`Valor Total em Vendas: R$ ${calcularValorTotal(vendas).toFixed(2)}`);
            console.log(`Preço Médio Geral: R$ ${calcularPrecoMedioGeral(vendas).toFixed(2)}`);
            break;
        case '2':
            console.log('Sumarização por Estado (UF):');
            
            readline.question('Digite a UF desejada: ', (uf) => {
                let res = sumarizarPorUF(vendas, uf);
                console.log(`Quantidade Total Vendida: ${calcularQuantidadeTotal(res.total)}`);
                console.log(`Valor Total em Vendas: R$ ${calcularValorTotal(res.valor).toFixed(2)}`);
                console.log(`Preço Médio Geral: R$ ${calcularPrecoMedioGeral(res.preco).toFixed(2)}`);
            });
            break;
        case '3':
            console.log('Sumarização por Data:');
            break;
        default:
            console.log('Opção inválida.');
    }
    readline.close();
});