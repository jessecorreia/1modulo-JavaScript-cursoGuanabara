

// colocando valores todos de uma vez
let num = [ 1,2,4,5,7,8]
console.log(num)

// colocando valores na ultima posição do array
// o metodo abaixo é colocando manualmente
let num2 = [1,2,4,5]
num2[4] = 7
// o metodo abaixo é colocando na ultima posição automatico
num2.push(8)
console.log(num2)
//no teste abaixo o comando "sort" é usado para colocar em ordem crescente o array
let numCrescente = [80 ,70 ,50 ,40 ,20 ,10]
numCrescente.sort()
console.log(numCrescente)


// testando com modo de repetição 
var res = document.getElementById('res')
let teste = [ 20, 50, 40, 80, 90, 10]
// na linha abaixo colocando em ordem
teste.sort()

for (let c = 0; c < teste.length; c++) {
    res.innerHTML += ` ${teste[c]} -> `
    
}

//***********************************

// OUTRO METODO E O MAIS SIMPLES DE REALIZAR ESSA QUESTAO ACIMA SERIA:
let numIn= [80 ,70 ,50 ,40 ,20 ,10]
numIn.sort()
for(let conta in numIn){
    console.log(numIn[conta])
}

// para procurar se tem um valor no array se faz assim

var numBusca = [5,8,4,6,9,1]
var posic = numBusca.indexOf(8)
console.log(`O valor de '8' está na posição ${posic}.`)


//*****************************************

