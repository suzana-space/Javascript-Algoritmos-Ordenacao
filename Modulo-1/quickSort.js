//QuickSort é eficiente porém ultiliza muita memoória por conta da recursividade 
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

const listaDeComprasComPreco = [
    {produto: "manteiga",     preco: 19.50},
    {produto: "alcatra",      preco: 40   },
    {produto: "leite em pó",  preco: 23   },
    {produto: "picanha",      preco: 252  },
    {produto: "costelinha",   preco: 235  },
    {produto: "cuscuz",       preco: 75   },
    {produto: "banana prata", preco: 25   },
    {produto: "manjericão",   preco: 34   },
    {produto: "chá verde",    preco: 65.3 },
    {produto: "chá mate",     preco: 15.99}, 
] 


console.log(QuickSort(listaDeComprasComPreco, 0, listaDeComprasComPreco.length - 1))
