import CursosTi from './CursosTi.js'

function partition(array, esquerda, direita){
    let esquerdaAtual = esquerda
    let direitaAtual = direita
    let pivo = array[Math.floor((esquerdaAtual+direitaAtual)/2)]

    while(esquerdaAtual <= direitaAtual){
        while(array[esquerdaAtual].mensalidade < pivo.mensalidade){
            esquerdaAtual++
        }
        while(array[direitaAtual].mensalidade > pivo.mensalidade){
            direitaAtual--
        }

        if(esquerdaAtual <= direitaAtual){
            swap(array, esquerdaAtual, direitaAtual)
            esquerdaAtual++
            direitaAtual--
        }
    }
    return esquerdaAtual
}

function swap(array, de, para){
    [array[de], array[para]] = [array[para], array[de]]
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

//console.log(QuickSort(CursosTi, 0, CursosTi.length - 1))

const listaCursosOrdenada = QuickSort(CursosTi, 0, CursosTi.length - 1)
//console.log(result)

export default listaCursosOrdenada


