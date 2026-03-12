const { Carrinho } = require("../src/compras.js")

test("adicionar item ao carrinho", () => {
    const carrinho = new Carrinho()
    carrinho.adicionarItem({ nome: "Produto A", preco: 50 })
    expect(carrinho.itens.length).toBe(1)
    expect(carrinho.itens[0].nome).toBe("Produto A")
})

test("remover item do carrinho", () => {
    const carrinho = new Carrinho()
    carrinho.adicionarItem({ nome: "Produto A", preco: 50 })
    carrinho.removerItem("Produto A")
    expect(carrinho.itens.length).toBe(0)
})

test("calcular valor total do carrinho", () => {
    const carrinho = new Carrinho()
    carrinho.adicionarItem({ nome: "Produto A", preco: 50 })
    carrinho.adicionarItem({ nome: "Produto B", preco: 30 })
    const total = carrinho.calcularTotal()
    expect(total).toBe(80)
})