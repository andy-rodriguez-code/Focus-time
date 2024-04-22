const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');
const imgBanner = document.querySelector('.app__image');
const titulo= document.querySelector('.app__title');
const activeBoton=document.querySelectorAll('.app__card-button');
const activarMusica =document.querySelector('#alternar-musica');
const musica =  new Audio('./sonidos/luna-rise-part-one.mp3');
musica.loop=true;

activarMusica.addEventListener('change',()=>{
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

botonCorto.addEventListener('click', () => {
    cambiarContexto('descanso-corto')
    botonCorto.classList.add('active')
});
botonLargo.addEventListener('click', () => {
    cambiarContexto('descanso-largo')
    botonLargo.classList.add('active')
});

botonEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque')
    botonEnfoque.classList.add('active')
});
const cambiarContexto = (contexto)=>{
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