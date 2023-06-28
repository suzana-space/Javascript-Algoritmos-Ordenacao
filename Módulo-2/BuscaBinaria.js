import listaCursosOrdenada from './QuickSort.js'

const mensalidadesOrdenadas = listaCursosOrdenada.map((curso) => { // novo array com os valores de mensalidades já ordenado
    return {mensalidade: curso.mensalidade}
})
console.log(mensalidadesOrdenadas)

const buscaBinaria = (array, esquerda, direita, valorBuscado) => {
    console.log(`de: ${esquerda} para: ${direita}`)  // 
  const meio = Math.floor((esquerda+direita)/2)
  const atual = array[meio]

  if(valorBuscado === atual.mensalidade){
    return meio
  }
  if(valorBuscado < atual.mensalidade){
    return buscaBinaria(array, esquerda, meio - 1, valorBuscado)
  }
  if(valorBuscado > atual.mensalidade){
    return buscaBinaria(array, meio + 1, direita, valorBuscado)
  }
  else{
    return `valor não encontrado`
  }
}

console.log(`valor encontrado na indice: ${buscaBinaria(mensalidadesOrdenadas, 0, mensalidadesOrdenadas.length - 1, 3503)}`)



