const express = require('express');
const app = express();
const {
    calcularQuantidadeTotal,
    calcularValorTotal,
    calcularPrecoMedioGeral,
    sumarizarPorData,
    sumarizarPorUF
} = require('./funcoes');

const fs = require('fs');
const vendas = JSON.parse(fs.readFileSync('./vendas.json', 'utf-8'));

app.get('/sumarizar/geral', (req, res) => {
    
    res.send(
        `
        <h1>Sumarização Geral:<h1>
        <h2>Quantidade Total Vendida: ${calcularQuantidadeTotal(vendas)}</h2>
        <h2>Valor Total em Vendas: R$ ${calcularValorTotal(vendas).toFixed(2)}</h2>
        <h2>Preço Médio Geral: R$ ${calcularPrecoMedioGeral(vendas).toFixed(2)}</h2>

        `
    );
});

app.get('/sumarizar/uf', (req, res) => {
    let obj = sumarizarPorUF(vendas);
    let keys = Object.keys(obj);
    
    res.send(
        `
        ${keys.map((key) => {
            return `
            <h2>UF: ${key}</h2>
            <h2>Quantidade Total Vendida: ${obj[key].quantidade}</h2>
            <h2>Valor Total em Vendas: R$ ${(obj[key].quantidade * obj[key].precoUnitario).toFixed(2)}</h2>
            <h2>Preço Médio Geral: R$ ${obj[key].precoUnitario.toFixed(2)}</h2>
            `
        })}

        `
    );
});

app.get('/sumarizar/data', (req, res) => {
    let obj = sumarizarPorData(vendas);

    let keys = Object.keys(obj);
    
    res.send(
        `
        ${keys.map((key) => {
            return `
            <h2>Data: ${key}</h2>
            <h2>Quantidade Total Vendida: ${obj[key].quantidade}</h2>
            <h2>Valor Total em Vendas: R$ ${(obj[key].quantidade * obj[key].precoUnitario).toFixed(2)}</h2>
            <h2>Preço Médio Geral: R$ ${obj[key].precoUnitario.toFixed(2)}</h2>
            `
        })}

        `
    );
});

app.listen(3000);  
