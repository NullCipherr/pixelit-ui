# Pixelit UI

Conversor web de imagens para pixel art, desenvolvido em HTML, CSS e JavaScript puro.

O foco principal do projeto é a aplicação funcional em `demo/`, com pipeline de edição e exportação em tempo real. A `landing/` funciona como camada institucional e comercial para apresentação do produto.

## Principais funcionalidades

- Upload de imagem local
- Pixelização com controle de tamanho de bloco
- Aplicação de paletas de cor
- Efeitos visuais (escala de cinza, inversão, sépia, scanlines, brilho, contraste)
- Funções de pixelização (pixels nítidos e grade de blocos)
- Controle de dimensões de saída
- Exportação em `PNG`, `JPEG` e `WEBP`

## Estrutura do projeto

```text
.
├── assets/
│   ├── icons/
│   │   └── favicon.ico
│   └── images/
│       ├── sample.png
│       └── hero/
│           ├── Hero-Background.png
│           └── Result.png
├── demo/
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   └── scripts/
│       ├── main.js
│       ├── demo-ui.js
│       └── pixelit.min.js
├── landing/
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   └── scripts/
│       └── main.js
└── README.md
```

## Como executar localmente

1. Clone o repositório:

```bash
git clone https://github.com/arcosbr/pixelit-ui.git
cd pixelit-ui
```

2. Abra `demo/index.html` no navegador para usar o editor.

Opcional:
- abra `landing/index.html` para visualizar a página institucional com CTA para a demo.

## Fluxo recomendado de uso

1. Em **Entrada**, selecione a imagem.
2. Em **Pixelização**, ajuste bloco e opções de render.
3. Em **Efeitos** e **Paleta**, refine o resultado visual.
4. Em **Saída**, configure dimensões e formato.
5. Baixe a imagem final.

## Diretrizes de manutenção

- IDs de controles da demo devem permanecer estáveis para manter integração com `demo/scripts/main.js`.
- Estilos da demo ficam em `demo/styles/main.css`.
- Estilos da landing ficam em `landing/styles/main.css`.
- Imagens e ícones compartilhados devem permanecer em `assets/`.
- Evite dependências desnecessárias para manter portabilidade e performance.

## Licença

Este projeto utiliza o ecossistema do Pixelit original (MIT):
- https://github.com/giventofly/pixelit
