const { login, validarEmail } = require("../src/validacao.js")

test("login válido", () => {
    const resultado = login("usuario1", "1234")
    expect(resultado).toBe(true)
})

test("login inválido", () => {
    const resultado = login("usuario1", "senhaErrada")
    expect(resultado).toBe(false)
})

test("login com usuário vazio deve dar erro", () => {
    const resultado = login("", "1234")
    expect(resultado).toBe(false)
})

test("login com senha vazia deve dar erro", () => {
    const resultado = login("usuario1", "")
    expect(resultado).toBe(false)
})

test("cadastro com e-mail válido", () => {
    expect(validarEmail("usuario1@gmail.com")).toBe(true)
})

test("cadastro com e-mail inválido", () => {
    expect(validarEmail("usuario2@gmail")).toBe(false)
})