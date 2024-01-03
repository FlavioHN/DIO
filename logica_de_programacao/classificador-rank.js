const dados = require('prompt-sync') ();

// Calcular rank

function classificadorHeroi(vitorias, derrotas) {
    return saldoVitorias = vitorias - derrotas;
}

let saldoVitorias;
let nivel;
let repetir;

// Determinar nivel

while (true) {
    
    saldoVitorias = dados(`Digite o nível do Herói: `);

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
    
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);
    
    // Verificar nova entrada
    
    repetir = dados(`Cadastrar novo nível [SIM/NAO]: `);
    if (repetir.toUpperCase() == 'NAO') {
        console.log("Obrigador por participar...")
        break;
    }
}
