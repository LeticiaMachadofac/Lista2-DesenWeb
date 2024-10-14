function contarOcorrencias(array) {
    const frequencia = {};
    
    for (const numero of array) {
        if (frequencia[numero]) {
            frequencia[numero] += 1;}
        else {
            frequencia[numero] = 1;
            }
        } 
        return frequencia;   
    }
  const listaNumeros = [1,1,1,1,2,2,2,3,3];
  const resultado = contarOcorrencias(listaNumeros);
  console.log(resultado);