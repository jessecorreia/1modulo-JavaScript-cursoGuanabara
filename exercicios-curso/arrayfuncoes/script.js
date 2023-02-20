let num = document.getElementById('pnum')
let lista = document.getElementById('plista')
let res = document.getElementById('pres')
let valores = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if(isNum(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('[ERRO] VALOR INCORRETO OU JÁ ENCONTRADO EM LISTA!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.legth == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for(let pos in valores){
    
            soma += valores[pos]

            media = soma/tot

            if(valores[pos] > maior)
            maior = valores[pos]

            if(valores[pos] < menor)
            menor = valores[pos]
        }

        res.innerHTML = ''
       
        res.innerHTML += `<p>Ao todo, temos ${tot} número cadastrados!</p> <br>`
       
        res.innerHTML += `<p> O maior número da lista é ${maior}!</p> <br>`
      
        res.innerHTML += `<p> O menor número da lista é ${menor}!</p> <br>`
       
        res.innerHTML += `<p> A soma dos números da lista é ${soma}!</p> <br>`
        
        res.innerHTML += `<p> A média dos números da lista é ${media}!</p> <br>`
    
    }

}