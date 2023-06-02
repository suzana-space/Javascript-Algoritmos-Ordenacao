const precos = require('./listaDeCompras')
const menorPreco = require('./menorPreco')

for (let atual=0; atual < precos.length - 1; atual++){
    let menor = menorPreco(precos, atual)

    let precoAtual = precos[atual]
    let precoMenor = precos[menor]

    precos[atual] = precoMenor
    precos[menor] = precoAtual
}

console.log(precos)