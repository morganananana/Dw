const pessoa = {
    nome: 'Morgana Pithan',
    anoNascimento: 2006,
    vegetariano: false,
    ceps: ['91530370', '1234567'],
    pets: [{
        nome: 'nego do borel',
        tipo: 'gato',
        vacinado: true,
    },
    {
        nome: 'mel',
        tipo: 'gato',
        vacinado: false,
    }
    ],
    endereco: {
        cidade: 'poa',
        bairro: 'passo da areia',
        numero: 497,
        complemento: 'ap 202',
        endereco: 'AV. andarai',
    },
}
console.log(pessoa.endereco.cidade);

const { pets } = pessoa;
for (let pet of pets) {
    const { vacinado } = pet;
    if (vacinado === false) {
        const{nome} = pet;
        console.log(nome);
    }
}
