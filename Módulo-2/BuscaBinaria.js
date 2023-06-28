import listaCursosOrdenada from './QuickSort.js'

const mensalidadesOrdenadas = listaCursosOrdenada.map(curso => { //novo array com os valores de mensalidades já ordenado
    return {mensalidade: curso.mensalidade}
})
console.log(mensalidadesOrdenadas)   

const buscaBinaria = (array, esquerda, direita, valorBuscado) => {
  const meio = Math.floor((esquerda+direita)/2)
  const atual = array[meio]
}



