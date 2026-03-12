class Carrinho {
    constructor() {
        this.itens = []
    }

    adicionarItem(item) {
        this.itens.push(item)
    }

    removerItem(nome) {
        this.itens = this.itens.filter(item => item.nome !== nome)
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => total + item.preco, 0)
    }
}

module.exports = { Carrinho }