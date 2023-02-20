// função 1 basica

function parimpar (n) {
  
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }

}

console.log (parimpar(10))

// função 2, somando com dois parametros

function soma (n1=0, n2=0) {
   return n1 + n2
}

console.log (soma(5, 9))

// função 3, calculando fatorial

function fatorial (n) {
    let fat = 1
    
    for (let c = n; c > 1; c--) {
        fat *= c;
    }
    return fat
 }
 
 console.log (fatorial(5))

 // função 4, uma função chamando ela mesma, para fazer a fatorial
 function fator (n){
    if (n == 1) {
        return 1
    } else {
        return n * fator(n-1)
    }
 }
 console.log(fator(5))
