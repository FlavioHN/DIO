const prompt = require('prompt-sync') ();

// Calcular rank

function classificadorHeroi(vitorias, derrotas) {
    return saldoVitorias = vitorias - derrotas;
}

saldoVitorias = Number(prompt(`Digite o nível do Herói: `));
let nivel;

// Determinar nivel

if(saldoVitorias <= 10){
    nivel = "Ferro"
}
else if(saldoVitorias > 10 && saldoVitorias <= 20) {
    nivel = "Bronze"
}
else if(saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata"
}
else if(saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Diamante"
}
else if(saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Lendário"
}
else if(saldoVitorias >= 101) {
    nivel = "Imortal"
}
//else if(saldoVitorias != Number) {
//    console.log("Valor invalido, preencha novamante o nível com numeros");
//};

if(typeof(saldoVitorias) != Number) {
    console.log("Valor invalido, preencha novamante o nível com numeros");
}
else {
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

console.log(typeof saldoVitorias);