function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    


     if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert ('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        
        
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
           
            if (idade <= 10 ) {
                img.setAttribute('src', 'imagens/bebe-h.png')  

        }   else if (idade <= 21) {
            img.setAttribute('src', 'imagens/jovem-h.png')  
            
        }   else if (idade <= 55) {
            img.setAttribute('src', 'imagens/adulto-h.png')

        }   else {
            img.setAttribute('src', 'imagens/idoso-h.png') 
        }


    }   else if (fsex[1].checked) {
            genero = 'Mulher'
               
                if (idade <= 10) {
                    img.setAttribute('src', 'imagens/bebe-m.png')   
    
            }   else if (idade <= 21) {
                img.setAttribute('src', 'imagens/jovem-m.png')    
                
            }   else if (idade <= 55) {
                img.setAttribute('src', 'imagens/adulto-m.png')    
            }   else {
                img.setAttribute('src', 'imagens/idoso-m.png') 
            }

    }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ser <strong>${genero}</strong> com <strong>${idade}</strong> anos.</p>`
        res.appendChild(img)
}


}


