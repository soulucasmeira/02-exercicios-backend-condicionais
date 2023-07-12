//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 18050;
let valorFinal = 0;
if (tipoDePagamento === "credito") {
    valorFinal = valorDoProduto * 95 / 100;

} else if (tipoDePagamento === "cheque") {
    valorFinal = valorDoProduto * 97 / 100;

} else {
    valorFinal = valorDoProduto * 90 / 100;

}

console.log(`O valor a ser pago é de R$${(valorFinal / 100).toFixed(2)} reais.`)
