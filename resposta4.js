//  1° Criar função onde receberá como parâmetro valores de A, B e C.
//  2° Criar condição se A = 0 e B = 0 e C diferente de 1.
//  3° Criar variavel com valor de X.


function calcularValorX(A, B, C) {
  if (A === 0 && B === 0 && C !== 1) {
    return "Solução impossível";
  } else {
    const X = (1 - C) / (A + B);
    return X;
  }
}

// Valores:
const A = 0;
const B = 0;
const C = 5;

const valorX = calcularValorX(A, B, C);
if (typeof valorX === "number") {
  console.log("O valor de X é: " + valorX);
} else {
  console.log(valorX);
}

// Resultado:
// "Solução impossivel"
