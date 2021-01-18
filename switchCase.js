let permissao = 'diretor'; // comum, gerente, diretor

switch (permissao) {
    case 'comum':
        console.log('Usuário permitido para compras :) ');
        break;
    case 'gerente':
        console.log('Gerente permitido para vendas e compras :) ');
        break;
    case 'diretor':
        console.log('Diretor permitido para vendas, compras e administração :) ');
        break;
    default: // caso não caia nas condições acima
        console.log('Usuário não permitido :( ')
}