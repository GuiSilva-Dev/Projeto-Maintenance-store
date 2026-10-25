# Hdmr Ar - Assistência Técnica

Este projeto é uma Landing Page responsiva desenvolvida para uma empresa de assistência técnica especializada em manutenção e reparo de eletrodomésticos e eletrônicos. O site apresenta um design moderno, com tema escuro e detalhes em laranja, focado na conversão de clientes via WhatsApp e formulário de contato.

## 📋 Funcionalidades

- **Design Responsivo:** Layout adaptável para Desktops, Tablets e Dispositivos Móveis (Mobile First).
- **Carrossel de Imagens:**
  - Slider principal na seção de início.
  - Sliders múltiplos na seção "Sobre a Empresa" para exibir especialidades.
- **Animações e Interatividade:**
  - Botão "Fale Comigo" com efeito de rastro do mouse.
  - Cards de serviços que se deslocam para os lados ao rolar (desktop).
  - Menu Mobile com abertura lateral (fecha com Esc, no overlay ou ao escolher um link).
  - Respeita a preferência de "movimento reduzido" do sistema.
- **Navegação Suave:** Scroll suave via CSS (`scroll-behavior`), com links diretos funcionando (ex.: `/#contato`).
- **Botões Fixos:**
  - Botão "Voltar ao Topo" que aparece após a rolagem.
  - Botão flutuante do WhatsApp com mensagem pré-preenchida.
- **Formulário de Contato:** Envio via FormSubmit, com honeypot anti-spam e mensagem de confirmação ao voltar para o site.
- **SEO local:** Dados estruturados (`LocalBusiness` em JSON-LD), headings semânticos e `robots.txt`.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica do site.
- **CSS3:** Estilização completa, incluindo:
  - Flexbox e Grid Layout.
  - Media Queries para responsividade (todas em `responsividade.css`).
  - Variáveis CSS (tokens de cor, fonte, sombra e camadas no `:root` do `style.css`).
- **JavaScript (Vanilla):** um único `main.js`, sem variáveis globais, com uma função `init*` por parte da página.
- **Bibliotecas Externas:**
  - Bootstrap Icons (Ícones).
  - Fonte Poppins (Google Fonts).

## 📂 Estrutura do Projeto

```text
Maintenance-store/
├── index.html               # Estrutura principal
├── style.css                # Tokens (:root) e estilos base
├── responsividade.css       # Todas as media queries, por breakpoint
├── main.js                  # Menu, carrosséis, botões fixos e formulário
├── robots.txt
├── img/                     # Imagens em WebP com nomes em kebab-case
├── scripts/
│   └── verificar-site.js    # Checagem de links e arquivos (usada no CI)
└── .github/workflows/
    └── verificar.yml        # Valida HTML e links a cada push/PR
```

## 🚀 Como Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/GuiSilva-Dev/Maintenance-store.git
   ```
2. Navegue até a pasta do projeto.
3. Abra o arquivo `index.html` em seu navegador de preferência (ou use o Live Server).

Para rodar as mesmas checagens do CI localmente:

```bash
npx html-validate@8.18.2 index.html
node scripts/verificar-site.js
```

## 🔧 Personalização

Para adaptar o projeto para seu uso, lembre-se de alterar:
- **Número do WhatsApp:** Atualize os links `wa.me` e `tel:` no `index.html` e o `telephone` no bloco JSON-LD do `<head>`.
- **Formulário:** Verifique o atributo `action` do formulário no `index.html`. Para não expor o e-mail, troque-o pelo alias aleatório que o FormSubmit envia após a ativação.
- **Imagens:** Use WebP, nomes em kebab-case (sem espaços ou acentos) e informe `width`/`height` nas tags `<img>`.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo.

---

<p align="center">
  Desenvolvido por GS│Dev
</p>
