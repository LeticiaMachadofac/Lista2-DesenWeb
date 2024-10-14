function ehPalindromo(str) {
   
    const strSemEspaco = str.replace(/\s+/g, '').toLowerCase();

    const strInvertida = strSemEspaco.split('').reverse().join('');
    
    return strSemEspaco === strInvertida;
}

console.log(ehPalindromo("subi no onibus")); 