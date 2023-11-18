// Classificador de nivel de herois.

const dados = require('prompt-sync') ();

let heroi;
let nome;
let xp;
let repetir;

while (true) {

    heroi = dados("Digite a classe do heroi: ");
    nome = dados(`Digite o nome do ${heroi}: `);
    xp = dados(`Digite o XP do ${heroi}: `);
    
    if (xp <= 1000) {
        console.log(`O ${heroi} de nome ${nome} está na categoria FERRO com ${xp}XP`);
    } else if (xp >= 1001 && xp <= 2000) {
        console.log(`O ${heroi} de nome ${nome} está na categoria BRONZE com ${xp}XP`);
    } else if (xp >= 2001 && xp <= 5000) {
        console.log(`O ${heroi} de nome ${nome} está na categoria PRATA com ${xp}XP`);
    } else if (xp >= 5001 && xp <= 7000) {
        console.log(`O ${heroi} de nome ${nome} está na categoria OURO com ${xp}XP`);
    } else if (xp >= 7001 && xp <= 8000) {
        console.log(`O ${heroi} de nome ${nome} está na categoria PLATINA com ${xp}XP`);
    } else if (xp >= 8001 && xp <= 9000) {
        console.log(`O ${heroi} de nome ${nome} está na categoria ASCENDENTE com ${xp}XP`);
    } else if (xp >= 9001 && xp <= 10000) {
        console.log(`O ${heroi} de nome ${nome} está na categoria IMORTAL com ${xp}XP`);
    } else if (xp >= 10001) {
        console.log(`O ${heroi} de nome ${nome} está na categoria RADIANTE com ${xp}XP`);
    }
    
    repetir = dados(`Cadastrar novo heroi? [SIM ou NAO] `)
    if (repetir.toUpperCase() == 'NAO') {
        console.log("Obrigado por participar.")
        break;
    }    
}
