const produto = new Object
produto.nome = "Cadeira"
produto.marca = "Generica"
produto.preco = 220
console.log(produto)

// Podemos deletar alguns atributos com o delete
delete produto.preco

// console.log(produto)

const carro = { 
        modelo: 'A4',
        valor: 89000,
    
    //criando um Objeto dentro do objeto carro
    proprietario:{
        nome: 'Raul',
        idade: 56,
    //criando um Objeto dentro do objeto propretário
    endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
        condutores: [{
            nome: 'Junior',
            idade: 19
                    }, 
           {
            nome: 'Ana',
            idade: 25
           }],
           
    calcularValorSeguro: function()
    {
         return this.valor * 3
    }
}
// Podemos chamar as propriedades assim:
carro.proprietario.endereco.numero = 1000
console.log(carro.proprietario.endereco.numero)
// Ou assim: 
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

// Invocar a função calcularValorSeguro
const valorSeguro = carro.calcularValorSeguro();
console.log(valorSeguro);

// console.log(carro)