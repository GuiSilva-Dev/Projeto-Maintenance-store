# Hdmr Ar - Assistência Técnica

Este projeto é uma Landing Page responsiva desenvolvida para uma empresa de assistência técnica especializada em manutenção e reparo de eletrodomésticos e eletrônicos. O site apresenta um design moderno, com tema escuro e detalhes em laranja, focado na conversão de clientes via WhatsApp e formulário de contato.

## 📋 Funcionalidades

- **Design Responsivo:** Layout adaptável para Desktops, Tablets e Dispositivos Móveis (Mobile First).
- **Carrossel de Imagens:**
  - Slider principal na seção de início.
  - Sliders múltiplos na seção "Sobre a Empresa" para exibir especialidades.
- **Animações e Interatividade:**
  - Headline com rolagem infinita ("Marquee").
  - Botões com efeitos de hover e rastro do mouse.
  - Menu Mobile com animação de abertura lateral.
  - Botão flutuante (FAB) com expansão para redes sociais.
- **Navegação Suave:** Scroll suave (Smooth Scroll) ao clicar nos links do menu.
- **Botões Fixos:**
  - Botão "Voltar ao Topo" que aparece após a rolagem.
  - Botão flutuante do WhatsApp para contato rápido.
- **Formulário de Contato:** Integração configurada para envio de dados (via FormSubmit).

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica do site.
- **CSS3:** Estilização completa, incluindo:
  - Flexbox e Grid Layout.
  - Media Queries para responsividade.
  - Keyframes para animações personalizadas.
  - Variáveis CSS.
- **JavaScript (Vanilla):** Lógica para:
  - Sliders e Carrosséis (`rolagem.js`, `button.js`).
  - Menu Mobile (`btmobile.js`).
  - Efeitos de Scroll e Botões Fixos (`WhattsBt.js`, `SlideSobre.js`).
- **Bibliotecas Externas:**
  - Bootstrap Icons (Ícones).
  - AOS - Animate On Scroll (Efeitos de fade ao rolar a página - via atributos HTML).

## 📂 Estrutura do Projeto

```text
Project electronics/
├── index.html          # Estrutura principal
├── style.css           # Estilos globais
├── responsividade.css  # Ajustes para mobile e tablets
├── btmobile.js         # Lógica do menu mobile
├── button.js           # Efeitos do botão principal e slider topo
├── rolagem.js          # Lógica dos sliders de skills
├── SlideSobre.js       # Lógica da headline infinita e "Ler mais"
├── WhattsBt.js         # Botões fixos (WhatsApp e Topo)
└── img/                # Pasta de imagens
```

## 🚀 Como Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Navegue até a pasta do projeto.
3. Abra o arquivo `index.html` em seu navegador de preferência.

## 🔧 Personalização

Para adaptar o projeto para seu uso, lembre-se de alterar:
- **Links de Redes Sociais:** No arquivo `index.html`, atualize os `href` dentro da classe `.social-buttons`.
- **Número do WhatsApp:** Atualize os links `wa.me` no HTML e no arquivo `WhattsBt.js`.
- **Formulário:** Verifique o atributo `action` do formulário no `index.html` para garantir que o e-mail de destino esteja correto.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo.

---

<p align="center">
  Desenvolvido por GS│Dev
</p>
