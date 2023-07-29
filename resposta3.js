//  1° Criar função de calcular descontos recebendo como parâmetros descrição, quantidade e preço da unidade.
//  2° Criar condição de descontos entre quantidades 5 e 10
//  3° Criar objeto de item
//  4° Criar array para mostrar resultado

function calcularDescontos(descricao, quantidade, precoUnidade) {
  let desconto = 0;
  let total = quantidade * precoUnidade;

  if (quantidade <= 5) {
    desconto = total * 0.055; // 5.55%
  } else if (quantidade <= 10) {
    desconto = total * 0.08; //8%
  } else {
    desconto = total * 0.125; // 12.5%
  }

  const totalAPagar = total - desconto;
  const item = {
    descricao: descricao,
    quantidade: quantidade,
    precoUnidade: precoUnidade,
    total: total.toFixed(2),
    desconto: desconto.toFixed(2),
    totalAPagar: totalAPagar.toFixed(2),
  };
  return item;
}

// Item e valores consideraiveis
const descricao = "Tenis Nike";
const quantidade = 13;
const precoUnidade = 487;

const resultado = calcularDescontos(descricao, quantidade, precoUnidade);

const mostrarResultado = {
  descricao: "Descrição: " + resultado.descricao,
  quantidade: "Quantidade: " + resultado.quantidade,
  precoUni: "Preço unidade: R$" + resultado.precoUnidade.toFixed(2),
  total: "Total: R$" + resultado.total,
  desconto: "Desconto: R$" + resultado.desconto,
  dotalPagar: "Total a pagar: R$" + resultado.totalAPagar,
};
console.log(mostrarResultado);

// Resultado:
// {
//   descricao: 'Descrição: Tenis Nike',
//   quantidade: 'Quantidade: 13',
//   precoUni: 'Preço unidade: R$487.00',
//   total: 'Total: R$6331.00',
//   desconto: 'Desconto: R$791.38',
//   dotalPagar: 'Total a pagar: R$5539.63'
// }