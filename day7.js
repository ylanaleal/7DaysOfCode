function soma(a, b) {
    return Number(a) + Number(b);
}

function subtracao(a, b) {
    return Number(a) - Number(b);
}

function multiplicacao(a, b) {
    return Number(a) * Number(b);
}

function divisao(a, b) {
    return Number(a) / Number(b);
}

let num1 = "";
let num2 = "";
let action = "";

let continuar = prompt('Você deseja realizar alguma operação matemática? Digite "Sim" ou "Não"');
while (continuar.toLowerCase() === "sim") {
    action = prompt("Digite qual operação deseja realizar? + - * /");
    num1 = prompt("Digite o primeiro número");
    num2 = prompt("Digite o segundo número");

    switch (action) {
        case "+":
            alert(soma(num1, num2));
            break;
        case "-":
            alert(subtracao(num1, num2));
            break;
        case "*":
            alert(multiplicacao(num1, num2));
            break;
        case "/":
            alert(divisao(num1, num2));
            break;
        default:
            alert("Insira uma operação válida");
    }

    continuar = prompt('Você deseja realizar alguma operação matemática? Digite "Sim" ou "Não"');
    if (continuar.toLowerCase() === "não" || continuar.toLowerCase() === "nao") {
        alert('Até a próxima!');
        
    }
}


