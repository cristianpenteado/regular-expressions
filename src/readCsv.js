module.exports = (fs) => {
    //Lendo o arquivo .csv e transformando em string
    //Quebrando o csv onde houver ';' e transformando num array
    let readCsv = fs.readFileSync('./regex-catalog.csv', 'utf-8').toString().split(';');

    //Filtrando as espressões do .csv
    const csvFilteredRegex = readCsv.filter((value, i) => {
        return (i == 0 || i % 4 == 0 && value != '');
    });

    //Modificando as expressões que contenham algum erro sintático
    const regex = csvFilteredRegex.map((value) => {
        return value
            .replace('\r\n', '')
    });
    return regex;
}