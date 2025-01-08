function calcularIdade() {
  const anoAtual = 2025;
  const anoNascimento = document.getElementById('anoNascimento').value;
  const resultadoDiv = document.getElementById('resultado');

  resultadoDiv.innerHTML = '';

  const ano = parseInt(anoNascimento);

  if (isNaN(ano) || ano <= 0 || ano > anoAtual) {
    resultadoDiv.innerHTML = 'Por favor, insira um ano válido.';
    return;
  }

  const idade = anoAtual - ano;
  resultadoDiv.innerHTML = `Você tem ${idade} anos.`;
}

calcularIdade();