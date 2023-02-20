function contar(){

    var ini1 = document.getElementById("inicio")
    var fim1 = document.getElementById("fim")
    var p1 = document.getElementById("passo")

    if (ini1.value.length == 0 || fim1.value.length == 0 || p1.value.length == 0){
        alert('[ERRO] TODOS CAMPOS DEVEM SER DEFENIDOS CORRETAMENTE!')
    } else {
    var ini2 = Number(ini1.value)  
    var fim2 = Number(fim1.value)  
    var p2 = Number(p1.value)  
    var res1 = document.getElementById("res")

    if (p2 <= 0) {
        alert('[ERRO] Seu passo não pode ser igual ou menor que 0. Será considerado 1.')
        p2 = 1
    } 
    
    res1.innerHTML = ``

        if (ini2 < fim2) {
        
    for (let c = ini2; c < fim2; c+=p2) {
        res1.innerHTML += `${c} -> `
    }
        res1.innerHTML += `*-*`

    } else {

    for (let c = ini2; c > fim2; c-=p2) {
        res1.innerHTML += `${c} <- `
    }
        res1.innerHTML += `*-*`
    
    }
        
    }



}