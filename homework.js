const divide = (a, b) => {
    return a / b
}
const exponenciacao = (a, b) => {
    return a ** b
}
 module.exports = {
     divide,
     exponenciacao
}
const resultado = divide(20, 2)
const resultadoe = exponenciacao(5, 3) 
console.log(resultado, resultadoe)