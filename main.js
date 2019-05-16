//Importação de dependências
const request = require('request');
const fs = require('fs');
const readline = require('readline');
const crypto = require('crypto');

const readCsv = require('./src/readCsv');
const requestUrl = require('./src/requestUrl');

//Criação de uma interface para leitura dos dados de entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Exibindo a pergunta ao usuário
rl.question(
    `
    Digite uma URL para realizar a aplicação das REGEX's!
    Obs: Informar a URL sem 'http/https' e/ou 'www.'
    Exemplo de como utilizar: google.com
    >`, async (answer) => {
        //Leitura do arquivo
        const regex = await readCsv(fs);
        //Realizando a requisição para a URL
        await requestUrl(request, regex, answer, fs, crypto);

        rl.close();
    });