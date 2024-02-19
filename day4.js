// Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e 
// fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai 
// adivinhar (7, por exemplo).

// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. 
// Caso erre, ele vai te dar mais 2 tentativas.

// No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

// Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

let number = Math.floor(Math.random() * 10);
let i = 0;

for (let i = 0; i < 3; i++) {
    let guess = prompt('Adivinhe o número que estou pensando entre 0 e 10');

    if (guess == number) {
        alert(`Parabéns, você acertou! Pensei no número ${number}`);
        break;
    } else if (i == 2) {
        alert(`Você errou! Pensei no número ${number}!`);
    } 
} 


