function Chocotone(tipo, marca, tamanho, medida, sabor) {
    this.tipo = tipo,
    this.marca = marca,
    this.tamanho = tamanho,
    this.medida = medida,
    this.sabor = sabor
};

const chocotone = new Chocotone('trufado', 'Nestle', 400, 'gramas', 'chocolate ao leite');
console.log(chocotone);