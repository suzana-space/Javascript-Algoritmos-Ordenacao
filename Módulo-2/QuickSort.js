import LivrosProg from './LivrosProg.js'

function QuickSort(array){
    if(array.length > 1){
        let indexAtual = partition(array, esquerda, direita)
            if(esquerda < indexAtual - 1){
                QuickSort(array, esquerda, indexAtual)
            }
            if( indexAtual < direita){
                QuickSort(array, indexAtual, direita)
            }
    }
    return array
}

function partition(array, esquerda, direita){
    let pivo = array[Math.floor(array.length/2)]
    let esquerdaAtual = esquerda
    let direitaAtual = direita

    while(esquerdaAtual <= direitaAtual){
        while(array[esquerdaAtual].mensalidade < pivo.mensalidade){
            esquerdaAtual++
        }
        while(array[direitaAtual].mensalidade < pivo.mensalidade){
            direitaAtual--
        }

        if(esquerdaAtual <= direitaAtual){
            swap(array, esquerdaAtual, direitaAtual)
            esquerdaAtual++
            direitaAtual--
        }
    }
    return array
}

function menoresqPivo(array){
    let menores = 0

    for(let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual]
            if(produtoAtual.mensalidade < pivo.mensalidade){
                menores++
            }
    }
    return menores
}

function swap(array, de, para){
    [array[de], array[para]] = [array[para], array[de]]
}


console.log(QuickSort(CursosTi, 0, CursosTi.length-1))