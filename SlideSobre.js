document.addEventListener('DOMContentLoaded', function () {
    // Aguarda o carregamento total do DOM antes de executar o código

    const headlineScroll = document.getElementById('headline-scroll');
    // Seleciona o elemento com o ID 'headline-scroll'

    if (!headlineScroll) return;
    // Se o elemento não existir, encerra o script

    const clone = headlineScroll.cloneNode(true);
    // Clona todo o conteúdo do elemento para criar uma cópia idêntica
    clone.id = 'headline-scroll-clone';
    // Atribui um ID diferente para o clone (evita IDs duplicados no DOM)

    headlineScroll.parentNode.appendChild(clone);
    // Adiciona o clone logo após o original, dentro do mesmo container

    // Define posicionamento absoluto para que os dois blocos fiquem lado a lado
    headlineScroll.style.position = 'absolute';
    clone.style.position = 'absolute';
    headlineScroll.style.left = '0';
    // O original começa do lado esquerdo (posição 0)

    clone.style.left = `${headlineScroll.scrollWidth}px`;
    // O clone começa logo após o final do original (rolagem contínua)

    function updateWidths() {
        // Essa função atualiza as larguras e posições conforme o tamanho do conteúdo

        const scrollWidth = headlineScroll.scrollWidth;
        // Captura a largura total do conteúdo que será rolado

        headlineScroll.style.width = `${scrollWidth}px`;
        // Aplica essa largura ao original

        clone.style.width = `${scrollWidth}px`;
        // Aplica a mesma largura ao clone

        clone.style.left = `${scrollWidth}px`;
        // Reposiciona o clone para continuar a rolagem sem interrupção
    }

    updateWidths();
    // Chama a função ao carregar a página

    window.addEventListener('resize', updateWidths);
    // Garante que a largura seja recalculada se a tela mudar (ex: girar o celular)
});



// Cria e adiciona um estilo CSS para a animação de rolagem
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}`;
document.head.appendChild(styleSheet);


// Obtém todos os botões "Ler mais"
const readMoreButtons = document.querySelectorAll('.read-more');

// Função para alternar o conteúdo
readMoreButtons.forEach(button => {
    button.addEventListener('click', function () {
        const post = button.closest('.topo-site'); // Encontra o post correspondente ao botão clicado
        const content = post.querySelector('.post-content'); // Encontra o conteúdo do post
        const isVisible = content.style.display === 'block';

        // Alterna entre mostrar e esconder o conteúdo
        if (isVisible) {
            content.style.display = 'none'; // Esconde o conteúdo
            button.textContent = 'Ler mais'; // Altera o texto do botão
        } else {
            content.style.display = 'block'; // Exibe o conteúdo
            button.textContent = 'Ler menos'; // Altera o texto do botão
        }
    });
});