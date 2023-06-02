function menorPreco (arrCompras, posInicial) {
    let maisBarato = posInicial

    for(let atual = posInicial; atual < arrCompras; atual++){
        if(arrCompras[atual].preco < arrCompras[maisBarato].preco){
            maisBarato = atual
        }
    }
    return maisBarato
}

module.exports = menorPreco