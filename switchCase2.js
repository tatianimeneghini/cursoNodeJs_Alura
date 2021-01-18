let grupo = '30 anos';

switch (grupo) {
    case 'trabalhadores da saude':
        console.log('Primeiro grupo a ser vacinado');
        break;
    case 'indigenas':
        console.log('Primeiro grupo a ser vacinado');
        break;
    case 'quilombolas':
        console.log('Primeiro grupo a ser vacinado');
        break;
    case '75 anos':
        console.log('Segundo grupo a ser vacinado');
        break;
    case '70 anos':
        console.log('Terceiro grupo a ser vacinado');
        break;
    case '65 anos':
        console.log('Quarto grupo a ser vacinado');
        break;
    case '60 anos':
        console.log('Quinto grupo a ser vacinado');
        break;
    default:
        console.log('Grupo sem calendário na 1ª fase de vacinação do Coronavac em São Paulo');
}