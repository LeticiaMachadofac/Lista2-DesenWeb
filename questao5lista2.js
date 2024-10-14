function somaMatriz(matriz) {
    let soma = 0; 
    for (let i = 0; i < matriz.length; i++) {
     for (let j = 0; j < matriz[i].length; j++) {
         soma += matriz[i][j];
     }
 }
 return soma; 
 }
 
 const matrizTeste = [
     [2, 4, 6],
     [8, 10, 12],
     [14, 16, 18],
 ];
 
 console.log(somaMatriz(matrizTeste));