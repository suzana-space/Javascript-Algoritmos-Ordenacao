//MergeSort - Dividir para conquistar

import LivrosProg from './LivrosProg.js';

function MergeSort(array){
    if(array.length > 1){
        const meio = Math.floor(array.length/2)  //math oega numero inteiro

        const esquerda = MergeSort(array.slice(0, meio)) 
        const direita = MergeSort(array.slice(meio, array.length))
        array = ordena(esquerda, direita)
    }
    return array
}

function ordena(esquerda, direita){
    let indexAtualPart1 = 0
    let indexAtualPart2 = 0
    const result = []

    while(indexAtualPart1 < esquerda.length && indexAtualPart2 < direita.length){
        let produtoAtualPart1 = esquerda[indexAtualPart1]
        let produtoAtualPart2 = direita[indexAtualPart2]

        if(produtoAtualPart1.preco < produtoAtualPart2.preco){
            result.push(produtoAtualPart1)
            indexAtualPart1++
        }
        else{
            result.push(produtoAtualPart2)
            indexAtualPart2++
        }   
    }
    return result.concat(indexAtualPart1 < esquerda.length? esquerda.slice(indexAtualPart1): direita.slice(indexAtualPart2))
}

console.log(MergeSort(LivrosProg))

//retorna:
// [
//     { nome: 'Basic', preco: 12 },
//     { nome: 'Elixir', preco: 25 },
//     { nome: 'PHP', preco: 30 },
//     { nome: 'Ruby', preco: 32 },
//     { nome: 'Lua', preco: 45 },
//     { nome: 'Javascript', preco: 50 },
//     { nome: 'Pascal', preco: 56 },
//     { nome: 'Java', preco: 60 },
//     { nome: 'Python', preco: 89 }
// ]
