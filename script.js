const img = document.querySelector('#img');
const texto = document.querySelector('#texto');
var i = 0;

const textos = [
    'Bem vindo ao meu site, aqui você vai encontrar um pouco sobre mim e meus hobbies.',
    'Um dos meus hobbies é viajar de kombi, já fui para vários lugares do Brasil.',
]

const imgs = [
    './assets/kombi.webp',
    './assets/home.webp'
]

const render = () =>{
    img.src = imgs[i];
    texto.innerHTML = textos[i];
}

const next1 = () =>{
    if(i == imgs.length - 1)
        i = 0;
    else
        i++;
    render();
}