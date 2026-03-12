function login(usuario, senha) {
    if (!usuario || !senha) return false
    if (usuario === "usuario1" && senha === "1234") return true
    return false
}

function validarEmail(email) {
    // Regex simples para validar e-mail
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

module.exports = { login, validarEmail }