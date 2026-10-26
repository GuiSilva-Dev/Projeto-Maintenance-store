// Checagem rápida do site, sem dependências: node scripts/verificar-site.js
// Falha (exit 1) se encontrar arquivo referenciado que não existe, link "#" vazio,
// número de WhatsApp placeholder ou nome de imagem com espaço/acento.
const fs = require('fs')
const path = require('path')

const raiz = path.join(__dirname, '..')
const html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8')
const css = ['style.css', 'responsividade.css']
  .map((f) => fs.readFileSync(path.join(raiz, f), 'utf8'))
  .join('\n')

const erros = []

// arquivos locais referenciados no HTML (src/href) e no CSS (url())
const refs = [
  ...[...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map((m) => m[1]),
  ...[...css.matchAll(/url\(([^)]+)\)/g)].map((m) => m[1].replace(/['"]/g, ''))
].filter((r) => !/^(https?:|mailto:|tel:|data:)/.test(r))

for (const ref of new Set(refs)) {
  if (!fs.existsSync(path.join(raiz, ref))) erros.push(`arquivo não encontrado: ${ref}`)
}

if (/href="#"/.test(html)) erros.push('existe link com href="#" (aponta para lugar nenhum)')
if (/wa\.me\/\+?55(\d)\1{8,}/.test(html + css)) erros.push('número de WhatsApp placeholder encontrado')

for (const img of fs.readdirSync(path.join(raiz, 'img'))) {
  if (!/^[a-z0-9.-]+$/.test(img)) erros.push(`nome de imagem fora do padrão kebab-case: img/${img}`)
}

// links de redes ainda não preenchidos: só avisa, para não travar o deploy
const avisos = [...html.matchAll(/href="([^"]*SEU-PERFIL[^"]*)"/g)].map((m) => m[1])
if (avisos.length) console.warn(avisos.map((a) => '⚠ link de rede social ainda é placeholder: ' + a).join('\n'))

if (erros.length) {
  console.error(erros.map((e) => '✖ ' + e).join('\n'))
  process.exit(1)
}
console.log(`✔ ${new Set(refs).size} referências locais verificadas, nenhum problema encontrado`)
