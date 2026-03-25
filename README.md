# Pixelit UI

Conversor web de imagens para pixel art, desenvolvido em HTML, CSS e JavaScript puro.

O foco principal do projeto é a **aplicação de edição e exportação** (`demo.html`), que permite transformar imagens com controle de pixelização, paleta e efeitos visuais em tempo real.

## O que este projeto resolve

Criar pixel art manualmente para protótipos, posts, jogos e assets rápidos costuma ser demorado. O Pixelit UI reduz esse atrito com um fluxo direto:

1. enviar imagem
2. ajustar parâmetros visuais
3. aplicar efeitos e paletas
4. exportar no formato desejado

## Principais funcionalidades

- Upload de imagem local
- Ajuste de tamanho de bloco (pixelização)
- Conversão para escala de cinza
- Aplicação de paletas de cor
- Efeitos adicionais (inversão, sépia, scanlines, brilho e contraste)
- Controle de dimensão de saída (largura/altura máximas)
- Exportação em `PNG`, `JPEG` e `WEBP`
- Visualização em tempo real no canvas

## Estrutura do projeto

```text
.
├── demo.html            # Aplicação principal (editor de pixel art)
├── css/
│   └── styles.css       # Estilos da aplicação principal
├── js/
│   ├── main.js          # Motor de UI + pipeline de processamento
│   └── pixelit.min.js   # Biblioteca base de pixelização
├── img/
│   ├── sample.png       # Imagem padrão inicial
│   └── hero/
│       ├── Hero-Background.png
│       └── Result.png
├── index.html           # Landing institucional/comercial
├── style.css            # Estilos da landing
├── script.js            # Interações da landing
├── favicon.ico
└── README.md
```

## Como executar localmente

1. Clone o repositório:

```bash
git clone https://github.com/arcosbr/pixelit-ui.git
cd pixelit-ui
```

2. Abra `demo.html` no navegador para usar a aplicação.

Opcional:
- abra `index.html` para visualizar a página institucional com acesso à demo.

## Fluxo recomendado de uso

1. Acesse a aba **Entrada** e selecione uma imagem.
2. Em **Pixelização**, ajuste o tamanho de bloco e visualização.
3. Em **Efeitos** e **Paleta**, refine o estilo final.
4. Em **Saída**, defina dimensões e formato de arquivo.
5. Clique em **Baixar Imagem**.

## Diretrizes de manutenção

- Mantenha IDs dos controles estáveis em `demo.html` para não quebrar integrações com `js/main.js`.
- Concentre regras visuais da demo em `css/styles.css`.
- Evite dependências front-end desnecessárias para preservar leveza e portabilidade.
- Priorize responsividade, acessibilidade básica e performance no canvas.

## Landing page (contexto)

A landing existe como camada de apresentação comercial, mas não substitui o objetivo técnico do projeto, que é o editor funcional de pixel art.

## Licença

Este projeto segue o ecossistema do Pixelit original, distribuído sob licença MIT:
- https://github.com/giventofly/pixelit
