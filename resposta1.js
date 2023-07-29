//  1° Criar função de somar valor por hora, Dias trabalhados e Valor do dia.
//  2° Aplicar desconto de 21% do salário bruto
//  3° Aplicar valores chamando função
//  4° Desconto do salário bruto de 21%

const horasPorDia = 8; // Considerando 8 horas por dia
const precoHora = 11; // Considerando R$10 por hora
const diasTrabalhados = 30; // Considerando 30 dias trabalhados no mês

function calcularSalario(valorPorHora, diasTrabalhado, valorPorDia) {
  const salarioBruto = diasTrabalhado * valorPorDia * valorPorHora;
  const desconto = salarioBruto * 0.21;
  const salarioLiquido = salarioBruto - desconto;

  console.log("O salário bruto é de: R$ ", salarioBruto.toFixed(2));
  return salarioLiquido;
}

const salarioLiquido = calcularSalario(horasPorDia, precoHora, diasTrabalhados);
console.log("O salário líquido é de: R$ " + salarioLiquido.toFixed(2));

// // O salário bruto é de: R$  2640.00
// // O salário líquido é de: R$ 2085.60
