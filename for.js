// Tipos de laços de repetição:
//1. for
for (let i = 0; i < 5; i++) {
    console.log("Viva o SUS!", i);
};

// 2. while (verifica primeiro e executa depois)
let j = 5;
while (j >= 0) {
        console.log("Viva o SUS!", j);
    j--;
};

// 3. do ... while (executa primeiro e verifica)
let k = 0;
do {
    console.log('Viva a Ciência!', k);
    k++;
} while (k <= 5);

// 4. for ... in (iterar elementos de um array)
let pessoa = {
    nome: 'Ana', // key: value
    idade: 24
};
for (let key in pessoa) {
    console.log(key, pessoa.nome); // ou pessoa['nome]
} 

let cores = ['vermelho', 'azul', 'amarelo', 'verde', 'rosa', 'cinza', 'branco', 'preto'];
for (let index in cores) {
    console.log(cores[index]);
}

// 5. for ... of (iterar elementos de um array, mais simples)
let pautas = ['Viva o SUS!', 'Viva a Ciência!', 'Fora Bolsonaro!'];
for (let index of pautas) {
    console.log(index);
}

let cores = ['vermelho', 'azul', 'amarelo', 'verde', 'rosa', 'cinza', 'branco', 'preto'];
for (let cor of cores) {
    console.log(cor);
}
