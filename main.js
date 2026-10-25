// Script único do site. Cada parte da página tem sua função init*,
// e tudo roda dentro desta IIFE para não criar variáveis globais.
(function () {
    'use strict';

    const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Efeito de "rastro" do mouse nos botões com .btn--ripple
    function initBotaoHero() {
        document.querySelectorAll('.btn--ripple').forEach((btn) => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                btn.style.setProperty('--eixoX', (e.clientX - rect.left) + 'px');
                btn.style.setProperty('--eixoY', (e.clientY - rect.top) + 'px');
            });
        });
    }

    // Carrossel do topo: troca o radio marcado a cada 3s
    function initCarrosselHero() {
        const radios = document.querySelectorAll('.slides input[name="slid"]');
        if (!radios.length || reduzirMovimento) return;

        let atual = 0;
        setInterval(() => {
            // não gasta CPU com a aba em segundo plano
            if (document.hidden) return;
            atual = (atual + 1) % radios.length;
            radios[atual].checked = true;
        }, 3000);
    }

    // Menu mobile: abre no botão, fecha no X, em um link, no overlay, fora do menu ou com Esc
    function initMenuMobile() {
        const botao = document.getElementById('btn');
        const menu = document.getElementById('menu-mobile');
        const overlay = document.getElementById('overlay-menu');
        if (!botao || !menu) return;

        const abrir = () => {
            menu.classList.add('abrir-menu');
            botao.setAttribute('aria-expanded', 'true');
            // espera o menu ficar visível para poder receber o foco
            setTimeout(() => menu.querySelector('a')?.focus(), 50);
        };
        const fechar = () => {
            if (!menu.classList.contains('abrir-menu')) return;
            menu.classList.remove('abrir-menu');
            botao.setAttribute('aria-expanded', 'false');
        };

        botao.addEventListener('click', (e) => {
            e.stopPropagation();
            abrir();
        });
        menu.querySelector('.btn-fechar')?.addEventListener('click', fechar);
        menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', fechar));
        overlay?.addEventListener('click', fechar);

        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target)) fechar();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.classList.contains('abrir-menu')) {
                fechar();
                botao.focus();
            }
        });
    }

    // Atalhos flutuantes (WhatsApp e redes): abre no botão, fecha ao clicar fora, num link ou com Esc
    function initAtalhos() {
        const apps = document.getElementById('apps');
        const botao = document.getElementById('apps-botao');
        if (!apps || !botao) return;

        const alternar = (abrir) => {
            apps.classList.toggle('aberto', abrir);
            botao.setAttribute('aria-expanded', String(abrir));
            botao.setAttribute('aria-label', abrir ? 'Fechar atalhos' : 'Abrir WhatsApp e redes sociais');
        };

        botao.addEventListener('click', (e) => {
            e.stopPropagation();
            alternar(!apps.classList.contains('aberto'));
        });
        apps.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => alternar(false)));
        document.addEventListener('click', (e) => {
            if (!apps.contains(e.target)) alternar(false);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && apps.classList.contains('aberto')) {
                alternar(false);
                botao.focus();
            }
        });
    }

    // Botão "voltar ao topo": aparece depois de rolar 100px
    function initVoltarAoTopo() {
        const botao = document.getElementById('backToTop');
        if (!botao) return;

        const atualizar = () => botao.classList.toggle('visivel', window.scrollY > 100);
        window.addEventListener('scroll', atualizar, { passive: true });
        atualizar();

        botao.addEventListener('click', () => window.scrollTo({ top: 0 }));
    }

    // Cards de serviços começam centralizados e se deslocam para os lados ao rolar (só no desktop)
    function initCardsServicos() {
        const cards = Array.from(document.querySelectorAll('.card-servicos-left, .card-servicos'));
        const desktop = window.matchMedia('(min-width: 1025px)');
        if (!cards.length || reduzirMovimento) return;

        const atualizar = () => {
            if (!desktop.matches) {
                cards.forEach((card) => { card.style.transform = ''; });
                return;
            }
            const centroY = window.innerHeight / 2;
            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const distancia = rect.top + rect.height / 2 - centroY;
                const normalizado = Math.max(-1, Math.min(1, distancia / centroY));
                const direcao = index % 2 === 0 ? -1 : 1;
                card.style.transform = `translateX(${direcao * normalizado * 80}px)`;
            });
        };

        window.addEventListener('scroll', atualizar, { passive: true });
        window.addEventListener('resize', atualizar);
        atualizar();
    }

    // Sliders da seção Sobre a Empresa: setas + arrastar com mouse ou dedo
    function initSliders() {
        document.querySelectorAll('.slider').forEach((slider) => {
            const container = slider.querySelector('.slides-skills');
            const slides = slider.querySelectorAll('.slide-skills');
            if (!container || !slides.length) return;

            let atual = 0;
            let inicioX = null;

            const mostrar = (index) => {
                atual = (index + slides.length) % slides.length;
                container.style.transform = `translateX(${-atual * 100}%)`;
            };

            slider.querySelector('.prev')?.addEventListener('click', () => mostrar(atual - 1));
            slider.querySelector('.next')?.addEventListener('click', () => mostrar(atual + 1));

            // evita o "arrastar imagem" nativo do navegador
            container.querySelectorAll('img').forEach((img) => { img.draggable = false; });

            container.addEventListener('pointerdown', (e) => {
                inicioX = e.clientX;
                container.setPointerCapture(e.pointerId);
            });
            container.addEventListener('pointerup', (e) => {
                if (inicioX === null) return;
                const diferenca = inicioX - e.clientX;
                const limite = e.pointerType === 'touch' ? 30 : 50; // mínimo de pixels para contar como deslize
                inicioX = null;
                if (Math.abs(diferenca) > limite) mostrar(atual + (diferenca > 0 ? 1 : -1));
            });
            container.addEventListener('pointercancel', () => { inicioX = null; });
        });
    }

    // Formulário: volta para o site depois do envio e mostra a confirmação
    function initFormulario() {
        const form = document.getElementById('form-contato');
        const next = document.getElementById('form-next');
        const status = document.getElementById('form-status');
        if (!form) return;

        // o FormSubmit só aceita _next com URL absoluta (http/https)
        if (next && location.protocol.startsWith('http')) {
            next.value = location.origin + location.pathname + '?enviado=1#contato';
        } else if (next) {
            next.remove();
        }

        if (status && new URLSearchParams(location.search).has('enviado')) {
            status.textContent = 'Mensagem enviada! Em breve entraremos em contato.';
            status.hidden = false;
            history.replaceState(null, '', location.pathname + '#contato');
        }

        const botao = form.querySelector('.btn-enviar');
        const conteudoOriginal = botao?.innerHTML;
        form.addEventListener('submit', () => {
            if (!botao) return;
            botao.disabled = true;
            botao.textContent = 'Enviando...';
        });
        // ao voltar pelo histórico, a página pode vir do cache com o botão travado
        window.addEventListener('pageshow', () => {
            if (!botao) return;
            botao.disabled = false;
            botao.innerHTML = conteudoOriginal;
        });
    }

    function initAnoRodape() {
        const ano = document.getElementById('ano');
        if (ano) ano.textContent = new Date().getFullYear();
    }

    document.addEventListener('DOMContentLoaded', () => {
        initBotaoHero();
        initCarrosselHero();
        initMenuMobile();
        initVoltarAoTopo();
        initAtalhos();
        initCardsServicos();
        initSliders();
        initFormulario();
        initAnoRodape();
    });
})();
