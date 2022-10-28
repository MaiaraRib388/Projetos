// console.log('Estou aprendendo POO');

// class Pessoa {
//     nome;
//     idade;
//     cpf;
// }

// const pessoa1 = new Pessoa();
// pessoa1.nome = 'Maiara';
// pessoa1.idade = 25;
// pessoa1.cpf = 00000000000;

// 1 - Modelando uma Lâmpada

class Lampada {
    cor;
    wts;
    marca;

    function estado(){ 
        if(this.cor == 'amarelo') {
        return 'Lâmpada Acesa'
    } else if (this.cor == 'branca') {
        return 'Lâmpada Apagada'
    }
}
}

// Amarela = acesa
// Branca = apagada

const lampada1 = new Lampada();
lampada1.cor = 'amarelo';
lampada1.wts = 110;
lampada1.marca = 'h2o';
lampada1.estado();
console.log(lampada1.estado());

// const lampada1{
//     cor:'amarelo',
//     wts:110,
//     marca:'h2o'
// }