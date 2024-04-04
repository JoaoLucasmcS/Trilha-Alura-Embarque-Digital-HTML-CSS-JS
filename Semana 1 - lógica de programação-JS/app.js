alert("Boas vindas ao jogo do número secreto!");
let numerosecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;
let numeroMaximo = 100;
console.log(numerosecreto);

while (chute != numerosecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    if (chute == numerosecreto) {
        break;
    } else {
        if (chute > numerosecreto) {
            alert(`O número secreto é menor que ${chute} `);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
let palavraentativas = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso aí! Você descobriu o número secreto ${numerosecreto} com ${tentativas} ${palavraentativas}.`);