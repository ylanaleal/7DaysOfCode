// array para cada categoria
let frutas = [];
let legumes = [];
let laticinios = [];
let congelados = [];
let doces = [];
let remover = "";
let item = "";
let categoria = "";

// função para remover item da lista
function removeItemFromList(item, list) {
    if (list.includes(item)) {
        list.splice(list.indexOf(item), 1);
        alert(`O item ${item} foi removido com sucesso!\n Lista de compras:\n Frutas: ${frutas.length === 0 ? '0' : frutas}\n Legumes: ${legumes.length === 0 ? '0' : legumes}\n Laticínios: ${laticinios.length === 0 ? '0' : laticinios}\n Congelados: ${congelados.length === 0 ? '0' : congelados}\n Doces: ${doces.length === 0 ? '0' : doces}`);
    } 
}

// boas vindas, pergunta o nome
let client = prompt('Olá! Bem-vindo ao seu mercado virtual! Qual o seu nome?');
client = client.charAt(0).toUpperCase() + client.slice(1);

// loop para adicionar itens na lista
let continuar = "1";
while (continuar.toLowerCase() === "1" || continuar.toLowerCase() === "3") {
    // nome, pergunta se quer adicionar algo na lista s/n
    if(frutas.length === 0 && legumes.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0){
        continuar = prompt(`${client}, você deseja adicionar algo na sua lista de compras?\n 1 - Inserir um item\n 2 - Sair`);
    } else {
        continuar = prompt(`Você deseja algo mais na sua lista de compras?\n 1 - Inserir outro item\n 2 - Concluir\n 3 - Remover item:`);
    }

    // se a resposta for nao, encerra o programa
    if (frutas.length === 0 && legumes.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0 && continuar.toLowerCase() === "2"){  
        alert(`Obrigada por usar o nosso mercado virtual! Até a próxima!`);
        break;
    } else if (continuar.toLowerCase() === "2"){  
        alert(`Obrigada por usar o nosso mercado virtual! Até a próxima!\n Lista de compras:\n Frutas: ${frutas.length === 0 ? '0' : frutas}\n Legumes: ${legumes.length === 0 ? '0' : legumes}\n Laticínios: ${laticinios.length === 0 ? '0' : laticinios}\n Congelados: ${congelados.length === 0 ? '0' : congelados}\n Doces: ${doces.length === 0 ? '0' : doces}`);
        break;
    } else if (continuar.toLowerCase() != "1" && continuar.toLowerCase() != "2" && continuar.toLowerCase() != "3") {
        alert('Digite uma opção válida')
    }

    // se quiser sair, aparece a lista e acaba o programa
    if (continuar.toLowerCase() === "2") {
        alert(`Obrigada por usar o nosso mercado virtual! Até a próxima!\n Lista de compras:\n Frutas: ${frutas.length === 0 ? '0' : frutas}\n Legumes: ${legumes.length === 0 ? '0' : legumes}\n Laticínios: ${laticinios.length === 0 ? '0' : laticinios}\n Congelados: ${congelados.length === 0 ? '0' : congelados}\n Doces: ${doces.length === 0 ? '0' : doces}`);
        break;
    // se quiser adicionar
    } else if (continuar.toLowerCase() === "1") {
        item = prompt('Qual comida você deseja adicionar? Digite o nome');
        // deixar a primeira letra maiúscula
        item = item.charAt(0).toUpperCase() + item.slice(1);

        // adicionar o item na categoria correta
        categoria = prompt('Em qual categoria essa comida se encaixa?\n 1-Frutas\n 2-Legumes\n 3-Laticínios\n 4-Congelados\n 5-Doces');
        const categories = {
            "1": { name: "Frutas", array: frutas },
            "2": { name: "Legumes", array: legumes },
            "3": { name: "Laticínios", array: laticinios },
            "4": { name: "Congelados", array: congelados },
            "5": { name: "Doces", array: doces },
        };

        if (categories[categoria]) {
            const selectedCategory = categories[categoria];
            selectedCategory.array.push(item);
        } else {
            alert("Insira uma categoria válida");
        }

    // se quiser remover
    } else if (continuar.toLowerCase() === "3") {      
        remover = prompt(`Digite o nome do item que você deseja remover da lista:\n Lista de compras:\n Frutas: ${frutas.length === 0 ? '0' : frutas}\n Legumes: ${legumes.length === 0 ? '0' : legumes}\n Laticínios: ${laticinios.length === 0 ? '0' : laticinios}\n Congelados: ${congelados.length === 0 ? '0' : congelados}\n Doces: ${doces.length === 0 ? '0' : doces}`);
        remover = remover.charAt(0).toUpperCase() + remover.slice(1);

        if (frutas.includes(remover) === false && legumes.includes(remover) === false && laticinios.includes(remover) === false && congelados.includes(remover) === false && doces.includes(remover) === false) {
            alert("Não foi possível encontrar o item dentro da lista!");
        } else {
            removeItemFromList(remover, frutas);
            removeItemFromList(remover, legumes);
            removeItemFromList(remover, laticinios);
            removeItemFromList(remover, congelados);
            removeItemFromList(remover, doces);
        }
    }
};