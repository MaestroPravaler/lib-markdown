import chalk from "chalk";

console.log("Hello World");

console.log(chalk.red("Hello World"));

const paragrafo = "Um texto qualquer retornado por uma função";

function retornaTexto(string) {
    return string;
}

console.log(retornaTexto(paragrafo));
