//QuickSort é eficiente porém ultiliza muita memoória por conta da recursividade 

const precos = require('./listaDeCompras')
const swap = require('./troca')

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
        while(array[atualEsquerda].precos < pivo.precos){
            atualEsquerda++
        }
        while(array[atualDireita].precos > pivo.precos){
            atualDireita--
        }
        if(atualEsquerda <= atualDireita){
            swap(array, atualEsquerda, atualDireita)

            atualEsquerda++
            atualDireita--
        }
    }
    return atualEsquerda
}

console.log(QuickSort(precos, 0, precos.length - 1))

