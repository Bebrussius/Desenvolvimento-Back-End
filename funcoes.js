
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


function sumarizarPorData(vendas) {
    let arr = [];

    for(let i = 0; i < vendas.length; i++){
        if(arr.includes(vendas[i].data) == false){
            arr.push(vendas[i].data);
        }
    }  
    arr.sort((a, b) => {
        return new Date(a) - new Date(b);
    })

    let obj = {};

    for(let i = 0; i < arr.length; i++){
        for(let c = 0; c < vendas.length; c++){
            if(vendas[c].data == arr[i]){
                if(Object.keys(obj).includes(arr[i]) == false){
                    obj[arr[i]] = {
                        precoUnitario: vendas[c].precoUnitario,
                        quantidade: vendas[c].quantidade
                    }
                } else {
                    obj[arr[i]].quantidade += vendas[c].quantidade;
                }
            }
        }
    }
    return obj; 
}

function sumarizarPorUF(vendas, uf){
    let arr = [];

    for(let i = 0; i < vendas.length; i++){
        if(arr.includes(vendas[i].uf) == false){
            arr.push(vendas[i].uf);
        }
    }  

    let obj = {};

    for(let i = 0; i < arr.length; i++){
        for(let c = 0; c < vendas.length; c++){
            if(vendas[c].uf == arr[i]){
                if(Object.keys(obj).includes(arr[i]) == false){
                    obj[arr[i]] = {
                        precoUnitario: vendas[c].precoUnitario,
                        quantidade: vendas[c].quantidade
                    }
                } else {
                    obj[arr[i]].quantidade += vendas[c].quantidade;
                }
            }
        }
    }
     
    return obj;  
}

// Exporta todas as funções
module.exports = {
    calcularQuantidadeTotal,
    calcularValorTotal,
    calcularPrecoMedioGeral,
    sumarizarPorData,
    sumarizarPorUF
    // Adicione outras funções aqui, se necessário
};

