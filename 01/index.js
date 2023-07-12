const jogada1 = "papel"
const jogada2 = "pedra"

if (jogada1 === jogada2) {
    console.log("empate");
} else {
    if (jogada1 === "pedra") {
        jogada2 === "tesoura" ? console.log("Pedra ganhou.") : console.log("Papel ganhou.");
    } else if (jogada1 === "tesoura") {
        jogada2 === "papel" ? console.log("Tesoura ganhou.") : console.log("Pedra ganhou.");
    } else {
        jogada2 === "pedra" ? console.log("Papel ganhou.") : console.log("tesoura ganhou");
    }
}