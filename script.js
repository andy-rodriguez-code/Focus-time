const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');
const imgBanner = document.querySelector('.app__image');
const titulo= document.querySelector('.app__title');
const activeBoton=document.querySelectorAll('.app__card-button');
const activarMusica =document.querySelector('#alternar-musica');
const botonIniciarPausar=document.querySelector('#start-pause')
const textoIniciarPausar=document.querySelector('#start-pause')
const cambiarPause=document.querySelector('.app__card-primary-butto-icon')
const tiempoPantalla=document.querySelector('#timer')

const musica =  new Audio('./sonidos/luna-rise-part-one.mp3');
const audioPlay = new Audio('./sonidos/play.wav');
const audioPausa = new Audio('/sonidos/pause.mp3')
const audioTiempoFinalizado = new Audio('./sonidos/beep.mp3');

let temporizadorSegundo = 1500;
let idIntervalo=null;
musica.loop=true;

activarMusica.addEventListener('change',()=>{
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

botonCorto.addEventListener('click', () => {
    temporizadorSegundo=300
    cambiarContexto('descanso-corto')
    botonCorto.classList.add('active')
});
botonLargo.addEventListener('click', () => {
    temporizadorSegundo=900
    cambiarContexto('descanso-largo')
    botonLargo.classList.add('active')
});

botonEnfoque.addEventListener('click', () => {
    temporizadorSegundo=1500
    cambiarContexto('enfoque')
    botonEnfoque.classList.add('active')
});
const cambiarContexto = (contexto)=>{
    mostrarTiempo()
    activeBoton.forEach(contexto => {
        contexto.classList.remove('active')
    });
    html.setAttribute('data-contexto',contexto);
    imgBanner.setAttribute('src',`./imagenes/${contexto}.png`);
    switch (contexto) {
        case 'enfoque':
            titulo.innerHTML=
            `Optimiza tu productividad,<br>
            <strong class="app__title-strong">sumérgete en lo que importa.</strong>`
        break;
        case 'descanso-corto':
            titulo.innerHTML=
            `¿Que tal tomar un respiro?<br>
            <strong class="app__title-strong">!Haz una pausa corta¡</strong>`
        break;
        case 'descanso-largo':
            titulo.innerHTML=
            `Hora de volver a la superficie,<br>
            <strong class="app__title-strong">Haz una pausa larga.</strong>`
        break;
        default:
            break;
    }
}
const cuentaRegresiva = ()=>{
    if(temporizadorSegundo <= 0){
        audioTiempoFinalizado.play()
        alert('Tiempo acabado')
        reiniciar()
        return
    }
    temporizadorSegundo -=1;
    mostrarTiempo()
}
botonIniciarPausar.addEventListener('click',iniciarPausar)

function iniciarPausar() {
    if (idIntervalo) {
        audioPausa.play()
        reiniciar()
        return
    }
     audioPlay.play()
    idIntervalo=setInterval(cuentaRegresiva,1000)
    textoIniciarPausar.textContent='Pausar'
    cambiarPause.setAttribute('src', `/imagenes/pause.png`);
} 


function  reiniciar() {
    clearInterval(idIntervalo)
    textoIniciarPausar.textContent='Comenzar'
    cambiarPause.setAttribute('src', `/imagenes/play_arrow.png`);
    idIntervalo=null;
}
function mostrarTiempo() {
    const tiempo = new Date(temporizadorSegundo * 1000);
    const tiempoFormatedo=tiempo.toLocaleString('es-CO',{minute:"2-digit",second:'2-digit'})
    tiempoPantalla.innerHTML=`${tiempoFormatedo}`
}
mostrarTiempo()
