class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const user = new Usuario('mpicioli@gmail.com', 123);
const adm = new Admin('mpicioli@gmail.com', 123);

console.log(user.isAdmin(), adm.isAdmin());

const usuarios = [{
        nome: 'Diego',
        idade: 23,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Gabriel',
        idade: 15,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Lucas',
        idade: 30,
        empresa: 'Facebook'
    },
];

const idades = usuarios.map(item => item.idade);

const rocketMore18Years = usuarios.filter(item => item.idade > 18 && item.empresa === 'Rocketseat');

const userWorksOnGoogle = usuarios.find(item => item.empresa === 'Google');

const usersLess50Years = usuarios.map(usuario => ({
        ...usuario,
        idade: usuario.idade * 2
    }))
    .filter(usuario => usuario.idade <= 50);

console.log("2.1:", idades);
console.log('2.2:', rocketMore18Years);
console.log('2.3:', userWorksOnGoogle);
console.log('2.4:', usersLess50Years);

// 3.1
const arr = [1, 2, 3, 4, 5];

// converter em arrow function
// arr.map(function(item) {
//     return item + 10;
// });
arr.map(item => item + 10);


// 3.2
const usuario = {
    nome: 'Diego',
    idade: 23
};

// function mostraIdade(usuario) {
//     return usuario.idade;
// }
const mostraIdade = ({
    idade
}) => idade;
mostraIdade(usuario);


// 3.3
const nome = 'Diego';
const idade = 23;

// function mostraUsuario(nome = 'Diego', idade = 18) {
//     return { nome, idade };
// }
const mostraUsuario = (nome = 'Diego', idade = 28) => ({
    nome,
    idade
});
mostraUsuario(nome, idade);
mostraUsuario(nome);


// 3.4
// const promise = function() {
//     return new Promise(function (resolve, reject) {
//         return resolve();
//     });
// }
const promise = () => new Promise((resolve, reject) => resolve());

// 4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
const {
    nome
} = empresa;
const {
    cidade,
    estado
} = empresa.endereco;


// 4.2
function mostraInfo({
    nome,
    idade
}) {
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({
    nome: 'Diego',
    idade: 23
}));

// 5.1
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;

// console.log(x, y);

const soma = (...params) => {
    return params.reduce((total, next) => total + next);
};

// console.log(soma(1, 2, 3, 4, 5, 6));
// console.log(soma(1, 2));


// 5.2

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {
    ...usuario,
    nome: 'Gabriel'
};
const usuario3 = {
    ...usuario,
    endereco: {
        ...usuario.endereco,
        cidade: 'Lontras'
    }
};

console.log(usuario2, usuario3);

// 6

// const usuario = 'Diego';
// const idade = 23;
// console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
// console.log(`O usuário ${usuario} possui ${idade} anos`);

// 7

const nome = 'Diego';
const idade = 23;

// const usuario = {
//     nome: nome,
//     idade: idade,
//     cidade: 'Rio do Sul',
// };

const usuario = {
    nome,
    idade,
    cidade: 'Rio do Sul'
};
console.log(usuario);