# Crawler com Expressões Regulares

### Autores: **[Cristian Penteado](https://github.com/cristianpenteado)** & **[Douglas Scaini](https://github.com/douglasscaini)**

### Objetivo

Através de requisições a URL's informadas pelo usuário, o seguinte software aplicará expressões regulares no corpo do site e retornará quantos matches (combinações) encontrou de cada expressão.

Dado um arquivo .csv (valores separados por vírgula) contendo diversas expressões regulares, o crawler percorrerá o HTML em busca de matches entre o arquivo .csv e o HTML da URL solicitada.

### Funcionamento

1. _**[Node.js](https://nodejs.org/en/download/)** necessário._
2. _Download do projeto / `git clone`._
3. _`npm install` na pasta do projeto para obter as dependências._
4. _Na pasta do projeto executar `node main`._
5. _Informar URL quando o software solicitar._
6. _Pronto :D_

### Rodando a aplicação

1. _Download das dependências..._

![passo1](https://ap.imagensbrasil.org/images/2019/05/14/1correta.png)

2. _Digitar a URL..._

![passo2](https://ap.imagensbrasil.org/images/2019/05/14/2correta.png)

3. _Projeto Rodando... Buscando Matches..._

![passo3_1](https://ap.imagensbrasil.org/images/2019/05/14/3correta.png)

4. _Geração de arquivo .txt depois de finalizado..._

![passo4](https://ap.imagensbrasil.org/images/2019/05/15/a.png)

### Referências Utilizadas

-   [Entendendo de uma vez por todas Expressões Regulares - Introdução] - Parte 1.
-   [Entendendo de uma vez por todas Expressões Regulares - Metacharacters] - Parte 2.
-   [Entendendo de uma vez por todas Expressões Regulares - Classes de Caractere] - Parte 3.
-   [Entendendo de uma vez por todas Expressões Regulares - Quantifiers] - Parte 4.
-   [Entendendo de uma vez por todas Expressões Regulares - Capturando Grupos] - Parte 5.
-   [Entendendo de uma vez por todas Expressões Regulares - Âncoras] - Parte 6.

[entendendo de uma vez por todas expressões regulares - introdução]: https://medium.com/trainingcenter/entendendo-de-uma-vez-por-todas-express%C3%B5es-regulares-parte-1-introdu%C3%A7%C3%A3o-dfe63e289dc3
[entendendo de uma vez por todas expressões regulares - metacharacters]: https://medium.com/trainingcenter/entendendo-de-uma-vez-por-todas-express%C3%B5es-regulares-3538d42870f3
[entendendo de uma vez por todas expressões regulares - classes de caractere]: https://medium.com/trainingcenter/expressoes-regulares-parte-3-8fbd6b20a5f6
[entendendo de uma vez por todas expressões regulares - quantifiers]: https://medium.com/trainingcenter/expressoes-regulares-parte-4-92c41516e80c
[entendendo de uma vez por todas expressões regulares - capturando grupos]: https://medium.com/trainingcenter/entendendo-de-uma-vez-por-todas-express%C3%B5es-regulares-parte-5-5ffd39138f2
[entendendo de uma vez por todas expressões regulares - âncoras]: https://medium.com/trainingcenter/expressoes-regulares-parte-6-85804a357767
