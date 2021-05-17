const horaContainer = document.querySelector('.hora')
/*const minutosContainer = document.querySelector('.minutos')
const segundosContainer = document.querySelector('.segundos')*/

const actualizarHora = setInterval(function(){
   
    /*let horas = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()
    horaContainer.innerHTML = horas
    minutosContainer.innerHTML = minutos
    segundosContainer.innerHTML = segundos*/
    const date = new Date ()
    //refactor
    let horas = date.getHours()
    //template string
    horaContainer.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`


    
},1000)

