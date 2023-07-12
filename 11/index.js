//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 200000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;


let valorDaParcela = 0;
if (mesesDecorridos >= 60 || totalJaPagoPeloAluno >= 1800000) {
    console.log("Você não deve mais nada.")
} else if (rendaMensalEmCentavos > 200000) {
    valorDaParcela = rendaMensalEmCentavos * 0.0018;
    console.log(`O valor da parcela desse mês é R$${valorDaParcela.toFixed(2)} reais.`)
} else {
    console.log("Você não precisa pagar ainda, já que o valor da sua renda mensal é menor que R$2.000,00")
}