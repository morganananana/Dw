const filmes = [{
    nome: 'Eu queria ter sua vida',
    anoLancamento: 2011,
    diretor: 'David Dobkin',
    disponivelEm: [
        'Amazon Prime',
        'YouTube',
        'Apple Tv',
    ]
},
{
    nome: 'As branquelas',
    anoLancamento: 2004,
    diretor: 'Keenen Ivory Wayans',
    disponivelEm: [
        'Amazon Prime',
        'Netflix',
        'Apple Tv',
    ]
},
{
    nome: 'Todo mundo em pânico',
    anoLancamento: 2000,
    diretor: 'Keenen Ivory Wayans',
    disponivelEm: [
        'Amazon Prime',
        'Globo Play',
        'Apple Tv',
    ]
},
];

const htmlList = document.querySelector('#filmes');

for (let filme of filmes) {
    const p = document.createElement('p');
    p.textContent =filme.nome;
    htmlList.appendChild(p);
}







//Faça a modelagem e definição de uma lista dos seus filmes favoritos.
// Cada filme deve conter pelo menos 3 propriedades e pelo menos um deles deve ser um array de string.
//Além disso, deve possuir uma propriedade que seja do tipo array de objetos.