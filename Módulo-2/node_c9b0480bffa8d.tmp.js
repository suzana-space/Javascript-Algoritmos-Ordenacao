import CursosTi from './CursosTi.js';
import LivrosProg from './LivrosProg.js';

function MergeSort(array){
    if(array.length > 1){
        const meio = Math.floor(array.length/2)  //math oega numero inteiro

        const parte1 = MergeSort(array.slice(0, meio)) 
        const parte2 = MergeSort(array.slice(meio, array.length))
        array = ordena(parte1, parte2)
    }
    return array
}

function ordena(parte1, parte2){
    let indexAtualPart1 = 0
    let indexAtualPart2 = 0
    const result = []

    while(indexAtualPart1 < parte1.length && indexAtualPart2 < parte2.length){
        let produtoAtualPart1 = parte1[indexAtualPart1]
        let produtoAtualPart2 = parte2[indexAtualPart2]

        if(produtoAtualPart1.preco < produtoAtualPart2.preco){
            result.push(produtoAtualPart1)
            indexAtualPart1++
        }
        if(produtoAtualPart2.preco < produtoAtualPart1.preco){
            result.push(produtoAtualPart2)
            indexAtualPart2++
        }   
    }
    return result.concat(indexAtualPart1 < parte1.length? parte1.slice(indexAtualPart1): parte2.slice(indexAtualPart2))
}

console.log(MergeSort(CursosTi))


