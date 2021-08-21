// Ação de telefonar
let telefone = 0;

function tirarTelefone (telefone) {
    if (telefone == 0) {
        telefone = 1;
        console.log("Tem linha");
    } else {
        console.log("Não tem linha");
        telefone = 0;
    }
    return;
}

function discar (telefone) {
    if (telefone == 1) {
        telefone = 2;
        console.log("Está discando");
    } else {
        console.log("Não está discando");
        telefone = 0;
    }
    return;
}

function atender (telefone) {
    if (telefone == 2) {
        telefone = 3;
        console.log("Conversar");
    } else {
        telefone = 0;
        console.log("Tente mais tarde");
    }
    return;
}

// Conversão de moedas

const coinConvert = (dollars) => {
    const soles = dollars * 3.25;
    const pesosMexicanos = dollars * 18;
    const pesosChilenos = dollars * 660;

    return [soles, pesosMexicanos, pesosChilenos];
};

module.exports = coinConvert;

// Taxa do restaurante

const restaurantBill = (bill) => {
    
    const tax = bill * 0.10;
    const total = (bill + tax) / 5;
    console.log('$' + total);
    return '$' + total;
};



module.exports = restaurantBill;