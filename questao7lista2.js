function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length; 
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length; 

   
    if (colunasA !== linhasB) {
        console.log("O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda.");
    }

    const resultado = Array.from({ length: linhasA }, () => Array(colunasB).fill(0));

    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return resultado; 
}

const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
];

const matrizB = [
    [1, 2],
    [3, 4],
    [5, 6],
];

console.log(multiplicarMatrizes(matrizA, matrizB)); 
