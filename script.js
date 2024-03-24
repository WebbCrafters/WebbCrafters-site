function expandir1() {
    var p = document.getElementById("paragrafoRetratil1");
    p.classList.toggle("expandir");
    var seta = document.getElementById("seta1");
    seta.classList.toggle("setaParaCima");
}
function expandir2() {
    var p = document.getElementById("paragrafoRetratil2");
    p.classList.toggle("expandir");
    var seta = document.getElementById("seta2");
    seta.classList.toggle("setaParaCima");
}
function expandir3() {
    var p = document.getElementById("paragrafoRetratil3");
    p.classList.toggle("expandir");
    var seta = document.getElementById("seta3");
    seta.classList.toggle("setaParaCima");
}

let menuAberto = false;

function expandirMenu() {
    const menu = document.querySelector('.espacoMenu');
    const iconMenu = document.querySelector('#iconMenuDois');

    if (!menuAberto) {
        menu.classList.add('aberto'); // Adiciona a classe 'aberto' para mostrar o menu
    } else {
        menu.classList.remove('aberto'); // Remove a classe 'aberto' para esconder o menu
    }

    menuAberto = !menuAberto; // Inverte o estado do menu
}

