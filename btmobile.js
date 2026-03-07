/*BOTAO MOBILE ONCLICK*/
let button = document.getElementById("btn");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

button.addEventListener("click", () => {
    menu.classList.add("abrir-menu")
})
menu.addEventListener("click", () => {
    menu.classList.remove("abrir-menu")
})
overlay.addEventListener("click", () => {
    menu.classList.remove("abrir-menu")
})

/*menu topo*/
document.addEventListener("DOMContentLoaded", function () {
    // Selecionando os links de navegação
    const navLinks = document.querySelectorAll(' .nav-menu a, .menu-mobile a, menu-topo , .footer-nav a');

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
