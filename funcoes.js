// Calcula quantidade total vendida
function calcularQuantidadeTotal(vendas) {
    let total = 0;
    for (let venda of vendas) {
        total += venda.quantidade;
    }
    return total;
}

// Calcula o valor total das vendas
function calcularValorTotal(vendas) {
    let total = 0;
    for (let venda of vendas) {
        total += venda.quantidade * venda.precoUnitario;
    }
    return total;
}

// Calcula o preço médio geral
function calcularPrecoMedioGeral(vendas) {
    const totalItens = calcularQuantidadeTotal(vendas);
    const totalValor = calcularValorTotal(vendas);
    return totalValor / totalItens;
}

// Exporta todas as funções
module.exports = {
    calcularQuantidadeTotal,
    calcularValorTotal,
    calcularPrecoMedioGeral
};
