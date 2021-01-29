window.onload = () => {
const BotaoMenos = document.querySelector('.quantidade-menos')
const BotaoValor = document.querySelector('.quantidade-valor')
const BotaoMais = document.querySelector('.quantidade-mais')
const Carrinho = document.querySelector('.compra')

let quantidade = 1

BotaoMenos.addEventListener('click', () => {
 quantidade = quantidade - 1
 BotaoValor.innerHTML = quantidade
 Carrinho.innerHTML = 'Carrinho (' + quantidade + ')'
})

BotaoMais.addEventListener('click', () => {
 quantidade = quantidade + 1
 BotaoValor.innerHTML = quantidade
 Carrinho.innerHTML = 'Carrinho (' + quantidade + ')'
})
}
