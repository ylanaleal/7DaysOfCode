// Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá a
// prender C# ou aprender Java.

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida 
// ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a 
// pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: 
// “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela 
// complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

let nameAnswer = prompt('Qual o seu nome?');
let yourName = nameAnswer.charAt(0).toUpperCase() + nameAnswer.slice(1);
let area = prompt(`${yourName}, você quer seguir para área de Front-End ou seguir para a área de Back-End? Digite o nome da área:`);
let language = "";

if (area.toUpperCase() == "FRONT-END") {
    language = prompt(`${yourName}, você quer aprender React ou aprender Vue?`);
} else if (area.toUpperCase() === "BACK-END"){
    language = prompt("Você quer aprender C# ou Java?");
}
else {
    alert("Você não inseriu uma área válida!");
} 

let fullstack = prompt(`Você quer seguir no ${area} ou se especializando para Full-Stack? Digite 1 para seguir na área escolhida ou 2 para se especializar em Full-Stack:`);

if (fullstack == 1) {
    alert(`Muito bom! Continue estudando e você terá muito sucesso.`)
} else if (fullstack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${language} se você quer se tornar Full-Stack!`);
}
else {
    alert("Você não inseriu um valor válido!");
}


let tech = prompt(`Tem mais alguma tecnologia que você gostaria de aprender? Digite "Sim" ou "Não":`);
let techArray = [];

while (tech == "Sim" || tech == "sim" || tech == "SIM") {
    let newTech = prompt(`Qual?`);
    newTech = newTech.charAt(0).toUpperCase() + newTech.slice(1);
    techArray.push(newTech);
    alert(`${newTech} é realmente uma tecnologia muito legal!`)
    tech = prompt(`Tem mais alguma tecnologia que você gostaria de aprender? Digite "Sim" ou "Não":`);
}

techArray = techArray.join(", ");
alert(`Muito bem, se especialize em ${techArray} e você terá muito sucesso! Boa sorte!`)

