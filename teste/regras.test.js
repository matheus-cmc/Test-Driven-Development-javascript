const { calcularDesconto, calcularDescontoVIP, calcularMedia, estaAprovado } = require("../src/regras.js")

test("cálculo de desconto de 10%", () => {
    const valor = 100
    const resultado = calcularDesconto(valor)
    expect(resultado).toBe(90) 
})

test("cálculo de desconto para cliente VIP (20%)", () => {
    const valor = 200
    const resultado = calcularDescontoVIP(valor)
    expect(resultado).toBe(160)
})

test("cálculo da média de notas de um aluno", () => {
    const notas = [7, 8, 6]
    const resultado = calcularMedia(notas)
    expect(resultado).toBe(7) 
})

test("aluno aprovado (média >= 7)", () => {
    const media = 7.5
    const resultado = estaAprovado(media)
    expect(resultado).toBe(true)
})

test("aluno reprovado (média < 7)", () => {
    const media = 6
    const resultado = estaAprovado(media)
    expect(resultado).toBe(false)
})