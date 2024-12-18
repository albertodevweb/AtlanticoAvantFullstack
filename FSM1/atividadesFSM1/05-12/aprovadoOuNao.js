//Solicita nota do aluno
const inputNotaAluno = window.prompt("Digite sua nota: "); 

const notaAluno  = parseFloat(inputNotaAluno);

//Verifica se a nota é maior que 7 e imprime o resultado na pagina html
function verificaSeFoiAprovadoOuNao (){
    return notaAluno >= 7 ? document.write ("Parabéns, Você foi aprovado!") : document.write ( "Estude mais! Você foi reprovado.");
};

verificaSeFoiAprovadoOuNao();