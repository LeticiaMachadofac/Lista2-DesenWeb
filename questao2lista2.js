function ordenarPorIdade (pessoas) {
    return pessoas.sort((a,b) => a.idade - b.idade);
}
    const pessoas = [
        {nome: 'Vitor', idade: 24},
        {nome: 'Larissa', idade: 26},
        {nome: 'Julia', idade: 17},
        {nome: 'Micaela', idade: 20}
    ];
    const resultado = ordenarPorIdade(pessoas);
    console.log(resultado);
