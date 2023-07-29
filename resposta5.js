//  1° Criar função onde receberá como parâmetro o numero da placa.
//  2° Criar validações do padrão de placa do Brasil e Mercosul.
//  3° Criar função para encontrar placa correspondente.
//  4° Criar função para encontrar placa correspondente.
//  5° Criar condição de encontrar placa correspondente ao padrão.
//  6° Criar função onde possa indentificar placa correspondente.
//  7° Criar condição de encontrar placa correspondente ao padrão.

function validarPlaca(placa) {
  const padraoBrasil = /^[A-Z]{3}\d{4}$/;
  const padraoMercosul = /^[A-Z]{3}\d[A-Z]\d{2}$/;

  if (padraoBrasil.test(placa)) {
    return "Brasil";
  } else if (padraoMercosul.test(placa)) {
    return "Mercosul";
  } else {
    return "formato inválido";
  }
}

function encontrarPlacaCorrespondente(placa, padraoAtual) {
  if (padraoAtual === "Brasil") {
    return placa.slice(0, 3) + placa[3] + placa.slice(4);
  } else if (padraoAtual === "Mercosul") {
    return placa.slice(0, 3) + placa[3] + placa.slice(4);
  } else {
    return "formato inválido";
  }
}

// Placas exemplos
const placaExemplo1 = "ABC1234";
const placaExemplo2 = "ABC1C34";
const placaExemplo3 = "XYZ567";

function identificarPadraoECorrespondente(placa) {
  const padraoAtual = validarPlaca(placa);

  if (padraoAtual !== "formato inválido") {
    console.log("Para a Placa " + placa + ":");
    console.log("Padrão: " + padraoAtual);
    console.log(
      "Correspondente: " + encontrarPlacaCorrespondente(placa, padraoAtual)
    );
  } else {
    console.log("Placa inválida.");
  }
}
identificarPadraoECorrespondente(placaExemplo1);
identificarPadraoECorrespondente(placaExemplo2);
identificarPadraoECorrespondente(placaExemplo3);

// Resultado
// Padrão: Brasil, Correspondente: ABC1C34.
// Padrão: Mercosul, Correspondente: ABC1234.
// Formato inválido.
