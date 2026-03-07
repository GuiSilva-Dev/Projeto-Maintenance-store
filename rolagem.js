//PWGA TODOS OS ELEMENTOS COM A CLASSE 'SLIDER'(OU SEJA,TODOS OS CARROSSEIS DA PAGINA)
document.querySelectorAll('.slider').forEach((slider) => {

    //DENTRO DE CADA CARROSSEL,SELECIONA O CONTAINER QUE CONTEM TODOS OS SLIDES
    const imagesContainer = slider.querySelector('.slides-skills');

    //PEGA TODOS OS SLIDES INDIVIDUAIS DENTRO DO CARROSSEL ATUAL 
    const images = slider.querySelectorAll('.slide-skills');

    //define a imagem inicial como sendo a primeira(indice 0)
    let index = 0;

    //PEGA O BOTAO DE AVANÇAR DENTRO DO CARROSSEL ATUAL
    const nextBtn = slider.querySelector('.next');

    //pega o botao de voltar no carrossel atual
    const prevBtn = slider.querySelector('.prev');

    //quando o botao next for clicado
    nextBtn.addEventListener('click', () => {
        //AVANÇA O INDICE,SE PASSAR DO ULTIMO SLIDE, VOLTA PARA O PRIMEIRO
        index = (index + 1) % images.length;

        //APLICA A TRANSIÇÃO VISUAL PARA O PROXIMO SLIDE(DESLIZA PARA ESQUERDA)
        imagesContainer.style.transform = `translateX(-${index * 100}%)`;
    });

    //quando o botao prev for clicado
    prevBtn.addEventListener('click', () => {
        //VOLTA O INDICE, SE ESTIVER NO PRIMEIRO VAI PARA O ULTIMO 
        index = (index - 1 + images.length) % images.length;
        //APLICA A TRRANSIÇÃO VISUAL PARA O SLIDE ANTEIOR(DESLIZA PARA A DIREITA)
        imagesContainer.style.transform = `translateX(-${index * 100}%)`;
    });
});
//ATIVAÇÃO BUTTONS SOCIAL//
function toggleMenu() {
    document.querySelector('.fab-container').classList.toggle('active');
}

// adiciona um ouvinte do evento de clique no documento inteiro//
document.addEventListener('click', function (event) {
    //seleciona o container principal do botão e dos botoes sociais//
    const fabContainer = document.querySelector('.fab-container');
    //seleciona apenas o botao principal9botao do menu0//
    const fabButton = document.querySelector('.fab');
    //verifica se o click nao foi dentro do botao principal//
    if (!fabButton.contains(event.target)) {
        //se clicou fora, remove a classe 'active' do container(esconde os botoes sociais)//
        fabContainer.classList.remove('active');
    }
});

//adiciona um ouvinte de evento de clique no botao principal 
document.querySelector(".fab"), addEventListener('click', function(event){

    //impede que o click no otao principal se propague para o documento
    //evita que o otao feche imediatamente ao ser clicado
    event.stopPropagation();
});
const elemento = document.querySelector('.fab-container');

// Troca o position pra fixed via JS
elemento.style.position = 'fixed';

//COMEÇA SEMPRE NO TOPO DO SITE//
window.onload = function() {
    window.scrollTo(0, 0);
  };