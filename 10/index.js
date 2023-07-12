const caractere = 0;

if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log("É uma vogal maiúscula");
} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log("É uma vogal minúscula");
} else if (caractere <= 9) {
    console.log("É um número");
} else {
    console.log("É uma consoante");
}