## Curso de NODE.js (Criando uma biblioteca)

Esta biblioteca acessa um arquivo de texto (markdow), procura dentro dele as urls e verifica se estão funcionais. Este projeto é baseado no curs NodeJS Criando sua biblioteca a ALURA.

![](assets/images/titulo-curso.png)

### Primeiros Passos

1. Criação da pasta do projeto (lib-markdown)
2. Criação do arquivo index.js
3. Inicialização do projeto
    ```
    npm init -y
    ```
4. Instalação da biblioteca chalk
    ```
    npm install chalk
    ```
5. Criação da primeira função com o objetivo de retornar um texto
6. Inicialização do git no projeto e criação do arquivo .gitignore

### Importação de Arquivos locais

1. Utilização da lib fs responsável por ler um arquivo
2. Tratamento de erros
3. Trabalhando - then() | Promise() | async/await

### Selecionando os links do texto

1. Trabalhando com expressões regulares
2. Extraindo os links do texto

### Organizando como o Usuario utilizará a lib

1. Criando o CLI
2. Passando o nome/local do arquivo a ser analizado pela linha de comando
3. Criando scripts para facilitar a digitação. Para rodar o projeto do terminal digite:
    ```
    npm rum cli
    ```

### Validações das URL's

1. Instalar o "node-fetch": "^2.6.1"
2. Acessar a lista de sites 
3. Receber o retorno do status dos sites acessados (200 ou outro qualquer)
4. Envolver o código assincrono com try/catch.

### Testes Unitários

1. Instalar a lib jest
2. Criar a pasta test na raiz
3. No arquivo package.json modificar o script relacionado ao teste para executar o que necessitamos
4. Criar os arquivos de testes
5. Criar testes para as funções (Acertos e erros possíveis)
6. Rodar os testes unitários
    ```
    npm run test
    ```



