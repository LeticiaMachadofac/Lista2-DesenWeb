function separarParesImpares(array) {
    const resultado = {
        par: [],
        impar: []
    };

    array.forEach(element => {
        if (element % 2 === 0){
            resultado.par.push(element);
        } else { 
            resultado.impar.push(element);
        }
    });
    return resultado; 
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const separados = separarParesImpares(numeros);

console.log(separados);