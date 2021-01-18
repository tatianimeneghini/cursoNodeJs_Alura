// Criar um objeto postagem que contenha título, mensagem, autor, visualização, lista de comentários, está ao vivo.

function Postagem (titulo, mensagem, autor, visualizacao, comentarios, estaAoVivo) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacao = visualizacao,
    this.comentarios = comentarios,
    this.estaAoVivo = estaAoVivo
}

let postagem17012021 = new Postagem('Gostei', 'Gostei do texto sobre o início da vacinação do Coronavac', 'Ana', 
                                        250, ['concordo', 'estou emocionado', 'quero logo!'], true);
console.log(postagem17012021);