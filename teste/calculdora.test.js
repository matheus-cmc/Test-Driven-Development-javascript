const {soma, subtrair, multiplicar, dividir}= require("../src/calculadora.js");

test("somar números positivo", () =>{
    const resultado= soma(2, 3)

    expect(resultado).toBe(5)
})


test("soma com número negativo", () =>{
    const resultado= soma(5, -2)

    expect(resultado).toBe(3)
})

test("subtração simples", () =>{
    const resultado= subtrair(7, 4)

    expect(resultado).toBe(3)
})

test("teste de multiplicação", () =>{
    const resultado= multiplicar(4, 3)

    expect(resultado).toBe(12)
})

test("test de divisão", () =>{
    const resultado= dividir(12, 2)
    
    expect(resultado).toBe(6)
})

test("erro divisão por zero", () =>{
    expect(() => dividir(10, 0).toThrow())
})