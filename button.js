//efeito botao fale comigo//
var btn = document.querySelector(".button");

btn.onmousemove = function (e) {
    var x = e.pageX - btn.offsetLeft;
    var y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--eixoX', x + 'px');
    btn.style.setProperty('--eixoY', y + 'px');
}

/*ROLAGEM HORIZONTAL DA IMGTOPO*/
/*VARIAVEL*/
let contador = 1;
/*FUNÇÃO ACONTEÇA A CADA ESPAÇO DE TEMPO*/
setInterval(function () {
    /*PEGA O CONTEUDO*/
    document.getElementById('slid' + contador).checked = true;
    contador++;
    /*FAZ O SLIDE FICAR EM LOOP*/
    if (
        contador > 5) {
        contador = 1;
    }

}, 3000/*MS*/);



/* mMENU TOPO SCROLL
document.addEventListener("DOMContentLoaded", function () {
// Selecionando os links de navegação
const navLinks = document.querySelectorAll(' .menu-topo a, .footer-nav a');

// Adicionando evento de clique para cada link de navegação
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Obtendo o alvo (a seção) do link
        const targetId = link.getAttribute('href').substring(1); // Obtém o id da seção

        // Selecionando a seção correspondente
        const targetSection = document.getElementById(targetId);

        // Rolando suavemente até a seção
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'

        });
      });
    });
});
*/
