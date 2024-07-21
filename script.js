function expandir1() {

    /*
        As funções retrair tem como função expandir e retrair os parágrafos retrateis através da adição e remoção da classe "expandir". Além disso, há o efeito de rotacionar as setas que ativam as funções, dessa forma a seta acompanha a direção em que o parágrafo se moverá, tornando a dinâmica mais intuitiva. 
    */

    var p = document.getElementById("paragrafoRetratil1");
    p.classList.toggle("expandir");

    var seta = document.getElementById("seta1");

    var setaParaCima = "setaParaCima";
    var setaParaBaixo = "setaParaBaixo";

    if (seta.classList.contains(setaParaCima)) {

        seta.classList.remove(setaParaCima);
        seta.classList.add(setaParaBaixo);

    } else if (seta.classList.contains(setaParaBaixo)) {

        seta.classList.remove(setaParaBaixo);
        seta.classList.add(setaParaCima);

    } else  if (!seta.classList.contains(setaParaBaixo) && !seta.classList.contains(setaParaCima)) {

        seta.classList.add(setaParaCima); 

    }
}
function expandir2() {

    /*
        As funções retrair tem como função expandir e retrair os parágrafos retrateis através da adição e remoção da classe "expandir". Além disso, há o efeito de rotacionar as setas que ativam as funções, dessa forma a seta acompanha a direção em que o parágrafo se moverá, tornando a dinâmica mais intuitiva. 
    */

    var p = document.getElementById("paragrafoRetratil2");
    p.classList.toggle("expandir");


    var seta = document.getElementById("seta2");

    var setaParaCima = "setaParaCima";
    var setaParaBaixo = "setaParaBaixo";

    if (seta.classList.contains(setaParaCima)) {

        seta.classList.remove(setaParaCima);
        seta.classList.add(setaParaBaixo);

    } else if (seta.classList.contains(setaParaBaixo)) {

        seta.classList.remove(setaParaBaixo);
        seta.classList.add(setaParaCima);

    } else  if (!seta.classList.contains(setaParaBaixo) && !seta.classList.contains(setaParaCima)) {

        seta.classList.add(setaParaCima); 

    }
}
function expandir3() {

    /*
        As funções retrair tem como função expandir e retrair os parágrafos retrateis através da adição e remoção da classe "expandir". Além disso, há o efeito de rotacionar as setas que ativam as funções, dessa forma a seta acompanha a direção em que o parágrafo se moverá, tornando a dinâmica mais intuitiva. 
    */

    var p = document.getElementById("paragrafoRetratil3");
    p.classList.toggle("expandir");


    var seta = document.getElementById("seta3");

    var setaParaCima = "setaParaCima";
    var setaParaBaixo = "setaParaBaixo";

    if (seta.classList.contains(setaParaCima)) {

        seta.classList.remove(setaParaCima);
        seta.classList.add(setaParaBaixo);

    } else if (seta.classList.contains(setaParaBaixo)) {

        seta.classList.remove(setaParaBaixo);
        seta.classList.add(setaParaCima);

    } else  if (!seta.classList.contains(setaParaBaixo) && !seta.classList.contains(setaParaCima)) {

        seta.classList.add(setaParaCima); 

    }
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

/*
let cont = 0;

window.addEventListener('scroll', function() {
    var elemento = document.getElementById('secaoManutencao');
    var posicao = elemento.getBoundingClientRect();
    
    
    // Verifica se qualquer parte da div está visível na tela
    if (posicao.top < window.innerHeight && posicao.bottom >= 0 && cont == 0) {
        // A div está visível, execute o efeito desejado
        confirm('A div está visível!');
        cont++;
    }
});
*/