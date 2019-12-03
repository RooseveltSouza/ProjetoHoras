function carregar() {

    var data = new Date()
    let hora = data.getHours()

    var titulo = document.getElementById('titulo')
    var container = document.getElementById('contImg')
    var images = document.createElement('img')
    images.setAttribute('id', 'image')
    
    hora = 12
    titulo.innerHTML = `<h2>Agora são exatamente ${hora} horas</h2>`
    if(hora < 12) {
        images.src = './img/manha.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
        
    }else if(hora < 17) {
        images.src = './img/tarde.jpg'
        document.body.style.backgroundColor = '#b9846f'

    }else if(hora < 24){
        images.src = './img/noite.jpg'
        document.body.style.backgroundColor = '#515154'

    }
    container.appendChild(images)
}
