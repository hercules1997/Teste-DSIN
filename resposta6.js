function verificarPerfeito(numero) {
  let somaDivisores = 0;
  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      somaDivisores += i;
    }
  }
  return somaDivisores === numero;
}

function verificarPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function gerarSequencia(N) {
  for (let i = 1; i <= N; i++) {
    let mensagem = "";
    if (verificarPerfeito(i)) {
      mensagem += "número perfeito";
    }
    if (i % 2 === 0) {
      if (mensagem) mensagem += ", ";
      mensagem += "múltiplo de 2";
    }
    if (i % 7 === 0) {
      if (mensagem) mensagem += ", ";
      mensagem += "múltiplo de 7";
    }
    if (verificarPrimo(i)) {
      if (mensagem) mensagem += ", ";
      mensagem += "número primo";
    }
    console.log(i + ": " + (mensagem || "Não é múltiplo"));
  }
}

// Número inteiro
const N = 10;
gerarSequencia(N);
