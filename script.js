const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');
const imgBanner = document.querySelector('.app__image');

botonCorto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-corto');
    imgBanner.setAttribute('src','./imagenes/descanso-corto.png');
});
botonLargo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-largo');
    imgBanner.setAttribute('src','./imagenes/descanso-largo.png');
});

botonEnfoque.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'enfoque');
    imgBanner.setAttribute('src','imagenes/enfoque.png');
});