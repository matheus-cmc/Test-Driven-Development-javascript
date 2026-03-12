function calcularDesconto(valor) {
    return valor * 0.9 // 10% de desconto
}

function calcularDescontoVIP(valor) {
    return valor * 0.8 // 20% de desconto para VIP
}

function calcularMedia(notas) {
    const soma = notas.reduce((a, b) => a + b, 0)
    return soma / notas.length
}

function estaAprovado(media) {
    return media >= 7
}

module.exports = { calcularDesconto, calcularDescontoVIP, calcularMedia, estaAprovado }