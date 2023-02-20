function calcular() {

var n1 = document.getElementById('numero1')
var tabu = document.getElementById('tabuada')

if (n1.value.length == 0) {
   
    alert(`[ERRO] Digite um numero para ser multiplicado`)

} else {
   
    var n2 = Number (n1.value)
    tabu.innerHTML = ''

    for (let c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text += `${n2} x ${c} = ${n2*c}`
        item.value = `tabu${c}`
        tabu.appendChild(item)
    }

}


}