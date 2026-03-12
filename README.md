# Atividade Prática – Testes de Software com TDD

Este projeto foi desenvolvido para praticar a metodologia **Test-Driven Development (TDD)** utilizando testes automatizados com **Jest** em JavaScript.

---

## Objetivo

Praticar o ciclo do TDD:

1. Escrever o teste automatizado antes do código.  
2. Executar o teste e verificar que ele falha.  
3. Implementar o código mínimo necessário para que o teste passe.  
4. Executar os testes novamente.  
5. Refatorar o código, se necessário.  
6. Repetir o processo para todos os testes.

---

## Descrição da Atividade

### Nível 1 – Operações básicas

- Testes para soma de dois números positivos.  
- Testes para soma com número negativo.  
- Testes para subtração simples.  
- Testes para multiplicação simples.  
- Testes para divisão simples.  
- Testes para divisão por zero (deve lançar exceção).

### Nível 2 – Validação de dados

- Testes para login válido (usuário e senha corretos).  
- Testes para login inválido (senha incorreta).  
- Testes para login com usuário vazio.  
- Testes para login com senha vazia.  
- Testes para cadastro de usuário com email válido.  
- Testes para cadastro com email inválido.

### Nível 3 – Regras de negócio

- Testes para cálculo de desconto de 10%.  
- Testes para cálculo de desconto para cliente VIP (20%).  
- Testes para cálculo da média de notas de um aluno.  
- Testes para verificar se o aluno está aprovado (média ≥ 7).  
- Testes para verificar se o aluno está reprovado.

### Nível 4 – Sistema de carrinho de compras

- Testes para adicionar item ao carrinho.  
- Testes para remover item do carrinho.  
- Testes para calcular o valor total do carrinho.

---

## Tecnologias Utilizadas

- JavaScript (Node.js)  
- Jest (testes automatizados)

---

## Estrutura do Projeto

TESTES/  
│  
├─ src/  
│   ├─ calculadora.js  
│   ├─ validacao.js  
│   ├─ regras.js  
│   └─ compras.js  
│  
├─ teste/  
│   ├─ calculadora.test.js  
│   ├─ validacao.test.js  
│   ├─ regras.test.js  
│   └─ compras.test.js  
│  
├─ .gitignore  
├─ package.json  
└─ package-lock.json  

---

## Como Rodar os Testes

1. Instale as dependências:  

```
# Atividade Prática – Testes de Software com TDD

Este projeto foi desenvolvido para praticar a metodologia **Test-Driven Development (TDD)** utilizando testes automatizados com **Jest** em JavaScript.

---

## Objetivo

Praticar o ciclo do TDD:

1. Escrever o teste automatizado antes do código.  
2. Executar o teste e verificar que ele falha.  
3. Implementar o código mínimo necessário para que o teste passe.  
4. Executar os testes novamente.  
5. Refatorar o código, se necessário.  
6. Repetir o processo para todos os testes.

---

## Descrição da Atividade

### Nível 1 – Operações básicas

- Testes para soma de dois números positivos.  
- Testes para soma com número negativo.  
- Testes para subtração simples.  
- Testes para multiplicação simples.  
- Testes para divisão simples.  
- Testes para divisão por zero (deve lançar exceção).

### Nível 2 – Validação de dados

- Testes para login válido (usuário e senha corretos).  
- Testes para login inválido (senha incorreta).  
- Testes para login com usuário vazio.  
- Testes para login com senha vazia.  
- Testes para cadastro de usuário com email válido.  
- Testes para cadastro com email inválido.

### Nível 3 – Regras de negócio

- Testes para cálculo de desconto de 10%.  
- Testes para cálculo de desconto para cliente VIP (20%).  
- Testes para cálculo da média de notas de um aluno.  
- Testes para verificar se o aluno está aprovado (média ≥ 7).  
- Testes para verificar se o aluno está reprovado.

### Nível 4 – Sistema de carrinho de compras

- Testes para adicionar item ao carrinho.  
- Testes para remover item do carrinho.  
- Testes para calcular o valor total do carrinho.

---

## Tecnologias Utilizadas

- JavaScript (Node.js)  
- Jest (testes automatizados)

---

## Estrutura do Projeto

TESTES/  
│  
├─ src/  
│   ├─ calculadora.js  
│   ├─ validacao.js  
│   ├─ regras.js  
│   └─ compras.js  
│  
├─ teste/  
│   ├─ calculadora.test.js  
│   ├─ validacao.test.js  
│   ├─ regras.test.js  
│   └─ compras.test.js  
│  
├─ .gitignore  
├─ package.json  
└─ package-lock.json  

---

## Como Rodar os Testes

1.Se você ainda não tem package.json:  

```
npm init -y
```

2. Instale as dependências:  

```
npm install --save-dev jest
```

3. Execute todos os testes:  

```
npm test
```

---

## Considerações Finais

Este projeto aplicou a metodologia TDD, garantindo que todas as funcionalidades fossem testadas antes da implementação, assegurando qualidade, confiabilidade e facilidade na manutenção do código.

---

## Autor

Matheus Carvalho
```

2. Execute todos os testes:  

```
npm test
```

---

## Considerações Finais

Este projeto aplicou a metodologia TDD, garantindo que todas as funcionalidades fossem testadas antes da implementação, assegurando qualidade, confiabilidade e facilidade na manutenção do código.

---

## Autor

Matheus Carvalho
