//Solicita idade para Usuário
const inputIdade = window.prompt("Digite sua idade: ");

const idade = parseInt(inputIdade);

//Verifica Se é maior de idade ou não 
function verificaMaiorDeIdade(idade) {
    return idade >= 18 ? document.write("É maior de idade.") : document.write("É menor de idade.");
}

verificaMaiorDeIdade(idade);