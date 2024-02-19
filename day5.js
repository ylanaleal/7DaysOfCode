// boas vindas, pergunta o nome
let client = prompt('Olá! Bem-vindo ao seu mercado virtual! Qual o seu nome?');
client = client.charAt(0).toUpperCase() + client.slice(1);

// nome, pergunta se quer adicionar algo na lista s/n
let continuar = prompt(`${client}, você deseja adicionar algo na sua lista de compras? Digite "Sim" ou "Não"`);

let frutas = [];
let legumes = [];
let laticinios = [];
let congelados = [];
let doces = [];


if (continuar.toLowerCase() === "não") {
    alert('Obrigada por usar o nosso mercado virtual! Até a próxima!');
} else if (continuar.toLowerCase() === "sim") {
    // loop para adicionar itens na lista
    while (continuar.toLowerCase() === "sim") {
        let item = prompt('Qual comida você deseja adicionar? Digite o nome');
        // deixar a primeira letra maiúscula
        item = item.charAt(0).toUpperCase() + item.slice(1);
        let categoria = prompt('Em qual categoria essa comida se encaixa? 1-Frutas / 2-Legumes / 3-Laticínios / 4-Congelados / 5-Doces');
        
        switch (categoria) {
            case "1":
                categoria = "Frutas";
                frutas.push(item)
                break;
            case "2":
                categoria = "Legumes";
                legumes.push(item)
                break;
            case "3":
                categoria = "Laticínios";
                laticinios.push(item)
                break;
            case "4":
                categoria = "Congelados";
                congelados.push(item)
                break;
            case "5":
                categoria = "Doces";
                doces.push(item)
                break;
            default:
                alert("Insira uma categoria válida");
        }

        let continuarLoop = prompt(`Você deseja adicionar algo mais na sua lista de compras? Digite "Sim" ou "Não":`);

        if (continuarLoop.toLowerCase() === "não") {
            continuar = "não";
            alert(`Lista de compras:\n  Frutas: ${frutas.length === 0 ? '0' : frutas}\n  Legumes: ${legumes.length === 0 ? '0' : legumes}\n Laticínios: ${laticinios.length === 0 ? '0' : laticinios}\n Congelados: ${congelados.length === 0 ? '0' : congelados}\n Doces: ${doces.length === 0 ? '0' : doces}`);
        } else if (continuarLoop.toLowerCase() === "sim") {
            continuar = "sim";
        } else {
            alert("Insira um valor válido");
            continuarLoop = prompt(`Você deseja adicionar algo mais na sua lista de compras? Digite "Sim" ou "Não":`);
        } 
    }
} else {
    alert("Insira um valor válido");
};