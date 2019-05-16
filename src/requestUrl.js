module.exports = (request, regex, answer, fs, crypto) => {
    //Faz uma requisição ao site desejado printando as expressões e ocorrências
    request(`http://${answer}`, (err, res, body) => {
        if (err) {
            console.error('URL inválida ou não encontrada!');
            return;
        }

        //Fragmentando o body da página pelos espaços em branco e armazenando dentro de um vetor
        let page = body.split(' ');

        //Contadores de ocorrências e expressões
        let occurrences = 0;

        regex.forEach((reg, numberExpressions) => {
            console.log('\n', 'Expressão ', numberExpressions + 1, ':', reg);

            page.forEach((element) => {
                /*Se a expressão encontrar algum campo 
                 *que atenda sua especificação irá incrementar as ocorrências*/
                if (element.match(reg)) {
                    occurrences++;
                    /*Para exibir os resultados filtrados pelas expressões regulares
                     *Descomente a linha abaixo*/
                    //console.log(`*  ${element.match(reg)}\n`);
                }
            });

            //Criação de arquivo .txt para organização do projeto
            fs.appendFileSync(`busca-regex-${generateNameCrypto(crypto, answer)}.txt`,
                `Expressão Regular: ${reg} - Match's: ${occurrences} - Data: ${new Date().toLocaleString()} - URL: http://${answer}\n`
            );

            console.log('-> Ocorrências: ', occurrences, '\n');
            console.log('-----------------------------------------------------------------------------');
            occurrences = 0;
        });

    });
}
//gera uma hash para o nome do txt
function generateNameCrypto(crypto, string) {
    return crypto.createHash('sha1').update(string).digest('hex');
}