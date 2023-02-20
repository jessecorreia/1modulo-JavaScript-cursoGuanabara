    function conta() {

var ini1 = document.getElementById('inicio')
var fim1 = document.getElementById('fim')
var passo1 = document.getElementById('passo')
var res = document.getElementById('res')

    if (ini1.value.length == 0 || fim1.value.length == 0 || passo1.value.length == 0) {
        alert(`[ERRO] Alguns dos dados estão incorretos ou não foram apresentados`)
        res.innerHTML = `IMPOSSIVEL CONTAR!`
    } else {
        res.innerHTML = `Contando... <br>`
        var ini2 = Number (ini1.value)
        var fim2 = Number (fim1.value)
        var passo2 = Number (passo1.value)

        if (passo2 <= 0) {
            alert(`Passo invalido, está sendo considerado o 1!`)
            passo2 = 1
        }


        if ( ini2 < fim2) {
            // contagem crescente
            for (let con = ini2; con <= fim2; con+=passo2) {
                res.innerHTML += `${con} &#128073;`           
            }
                res.innerHTML += `&#128721;`

        } else {
            // contagem regressiva
            for (let con = ini2; con >= fim2; con-=passo2) {
                res.innerHTML += `${con} &#128073;`           
            }
                res.innerHTML += `&#128721;`
    
    }
    }

}