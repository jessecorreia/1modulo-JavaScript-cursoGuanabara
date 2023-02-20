function calcular() {
    
    var num1 = document.getElementById('numero1')
    var tabu = document.getElementById('tabuada')
    

    if (num1.value.length == 0) {
        alert(`[Erro] digite um número valido!`)
    } else{
   
        var num2 = Number (num1.value)
        tabu.innerHTML = ''

        for (let mult = 1; mult <= 10 ; mult++) {
            let item = document.createElement('option')
            item.text += `${num2} x ${mult} = ${num2*mult}`
            item.value = `tabu${mult}`
            tabu.appendChild(item)
            
        }


    }

}