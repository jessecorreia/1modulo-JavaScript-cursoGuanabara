function carregar () {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
   
    

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12 ) {
        img.src= 'dia1.png'
        document.body.style.background = '#f9cea3'
    
    } else if (hora >= 12 && hora < 18){
        img.src= 'tarde2.png'    
        document.body.style.background = '#5899b9'
    } else {
        img.src= 'noite1.png'    
        document.body.style.background = '#123352'
    }
}

