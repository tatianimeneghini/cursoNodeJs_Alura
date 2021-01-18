// Factory Functions (Função de Fábrica)
// Encapsula dentro de um método que cria o objeto.

// Primeiro exemplo para criar um objeto.
const notebook = {
    marcaNotebook: 'Dell',
    tamanhoTela: 14,
    hd: '1T',
    ligar: function() {
        console.log("Ligando o notebook");
    }
};

// Cria um novo objeto dentro da própria função.
function criarNotebook (marcaNotebook, tamanhoTela, hd) { // camelCase
    return { 
        marcaNotebook, 
        tamanhoTela,
        hd,
        ligar() {
            console.log("Ligando o notebook");
        } 
    };
}

const notebook1 = criarNotebook('Mac', 18, '128GB');
console.log(notebook1);

// Constructor Function
// Cria um novo objeto (só executadas no âmbito global).

function Notebook (marcaNotebook, tamanhoTela, hd) { // PascalCase
    // Define propriedades e métodos
    this.marcaNotebook = marcaNotebook,
    this.tamanhoTela = tamanhoTela,
    this.hd = hd,
    this.ligar = function () {
        console.log("Ligando...");
    }
}

// Cria um novo objeto quando for estanciar.
const notebook2 = new Notebook('Asus', 16, '256GB');
console.log(notebook2);