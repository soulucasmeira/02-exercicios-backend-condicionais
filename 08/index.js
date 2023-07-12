const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (possuiPatologia || idade < 12 || idade >= 65 || altura < 150) {
    console.log("ACESSO NEGADO");
} else if (idade < 18 || ehEstudante) {
    console.log("O valor para pagar é de 10reais.");
} else {
    console.log("O valor para pagamento é de 20reais.");
};