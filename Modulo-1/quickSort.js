//QuickSort é eficiente porém ultiliza muita memoória por conta da recursividade 

const lista = require('./listaDeCompras.js')

function troca(lista, analise, anterior){
    let itemAnalise = lista[analise]
    let itemAnterior = lista[anterior]

    lista[analise] = itemAnterior
    lista[anterior] = itemAnalise
}

function QuickSort(array, esquerda, direita){
    if(array.length > 1){
        let indexAtual = partition(array, esquerda, direita)
            if(esquerda < indexAtual - 1){
                QuickSort(array, esquerda, indexAtual - 1)
            }
            if(indexAtual < direita){
                QuickSort(array, indexAtual, direita)
            }
    }
    return array
}

function partition(array, esquerda, direita){
    let pivo = array[Math.floor((esquerda+direita)/2)]
    let atualEsquerda = esquerda
    let atualDireita = direita
  
    while(atualEsquerda <= atualDireita){
        while(array[atualEsquerda].preco < pivo.preco){
            atualEsquerda++
        }
        while(array[atualDireita].preco > pivo.preco){
            atualDireita--
        }
        if(atualEsquerda <= atualDireita){
            troca(array, atualEsquerda, atualDireita)

            atualEsquerda++
            atualDireita--
        }
    }
    return atualEsquerda
}

function menorPreco (arrCompras, posInicial) {
    let maisBarato = posInicial

    for(let atual = posInicial; atual < arrCompras; atual++){
        if(arrCompras[atual].preco < arrCompras[maisBarato].preco){
            maisBarato = atual
        }
    }
    return maisBarato
}

console.log(QuickSort(lista, 0, lista.length - 1))
