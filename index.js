import chalk from "chalk";
import fs from "fs";


function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;

    while((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2]});
    }
    return arrayResultados.length === 0 ? 'Não há links no arquivo' : arrayResultados;
}

    function trataErro(erro){
    throw new Error(chalk.blue(erro.code, 'não foi possível ler o arquivo'));
}

// UTILIZANDO async await
async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try{
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return extraiLinks(texto);
    }catch(erro){
        trataErro(erro);
    }
}

export default pegaArquivo;

// UTILIZANDO Promise()
// function pegaArquivo(arquivo){
//     return new Promise((resolve, reject) => {
//         fs.readFile(arquivo, 'utf-8', (erro, conteudo) => {
//             if(erro){
//                 reject(trataErro(erro));
//             }else{
//                 resolve(console.log(chalk.green(conteudo)));
//             }
//         }
//         );
//     }
//     );
// }

// UTILIZANDO O .then()
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = "utf-8";
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(texto))
//     .catch((erro) => trataErro(erro));
// }

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = "utf-8";
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     });
// }