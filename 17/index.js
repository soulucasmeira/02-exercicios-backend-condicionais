//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorParcelas = (valorDoProduto / quantidadeDoParcelamento) / 100;
const jaPagas = valorPago / valorParcelas;

console.log(`Restam ${quantidadeDoParcelamento - jaPagas} de parcelas de R$${valorParcelas.toFixed(2)} reais.`)