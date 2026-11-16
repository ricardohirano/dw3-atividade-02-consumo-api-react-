# Beer Map

**Catálogo de Cervejas Importadas**

Projeto desenvolvido para a disciplina de **Desenvolvimento Web III (DW3)**, do curso de Desenvolvimento de Software Multiplataforma da **FATEC Registro**.

## Sobre o projeto

O Beer Map é uma aplicação web frontend desenvolvida com React e Next.js que consome uma API pública de cervejas e apresenta os dados em formato de catálogo.

O usuário pode explorar diferentes categorias, visualizar informações básicas das cervejas e acessar uma página de detalhes para consultar os dados individuais de cada produto.

O projeto foi desenvolvido como parte da **Atividade 02 – Consumo de API com React**, referente ao 2º bimestre da disciplina DW3.

## Tecnologias utilizadas

- **React** — construção de componentes e interfaces interativas.
- **Next.js 16** — estrutura da aplicação e gerenciamento de rotas.
- **JavaScript** — linguagem de programação.
- **Axios** — realização de requisições HTTP.
- **CSS Modules** — estilização modular dos componentes.
- **CSS3** — responsividade com abordagem Mobile First.

## API utilizada

O projeto utiliza a API pública **SampleAPIs – Beers**, que disponibiliza informações de cervejas sem necessidade de autenticação.

Documentação: https://sampleapis.com/api-list/beers

### Endpoints de listagem

| Categoria | Endpoint |
|---|---|
| Ale | `https://api.sampleapis.com/beers/ale` |
| Stout | `https://api.sampleapis.com/beers/stouts` |
| Red Ale | `https://api.sampleapis.com/beers/red-ale` |

### Endpoint de detalhes

`GET https://api.sampleapis.com/beers/{categoria}/{id}`

A consulta individual utiliza a categoria e o identificador da cerveja selecionada.

## Funcionalidades

- Catálogo de cervejas com cards dinâmicos.
- Alternância entre as categorias Ale, Stout e Red Ale.
- Consulta de informações por meio de requisições HTTP GET.
- Exibição de nome, imagem, preço e avaliação.
- Página de detalhes com informações individuais da cerveja.
- Navegação entre catálogo e detalhes.
- Preservação da categoria selecionada ao retornar ao catálogo.
- Tratamento de erros e estados de carregamento.
- Animação de carregamento desenvolvida com SVG e CSS.
- Imagem alternativa quando a imagem fornecida pela API está indisponível.
- Layout responsivo utilizando Mobile First.
- Tratamento de registros duplicados e dados inválidos da API.

## Estrutura do projeto

```text
public/
    beer-map-logo.png
    cerveja-placeholder.svg

src/
    app/
        cerveja/
            [categoria]/
                [id]/
                    page.js
        globals.css
        layout.js
        page.js
        page.module.css

    components/
        Loading/
            Loading.js
            Loading.module.css

        CatalogoCervejas.js
        CategoriaFiltro.js
        CategoriaFiltro.module.css
        CervejaCard.js
        CervejaCard.module.css
        CervejaDetalhes.js
        CervejaDetalhes.module.css
        CervejaImagem.js
        Header.js
        Header.module.css
        Footer.js
        Footer.module.css

    services/
        cervejaService.js
```

### Organização do código

**`app/`** — contém as páginas e rotas da aplicação utilizando o App Router do Next.js.

**`components/`** — contém os componentes reutilizáveis da interface.

**`services/`** — centraliza as requisições Axios à API pública.

## Como executar o projeto

### Pré-requisitos

- Node.js compatível com Next.js 16.
- npm instalado.

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/dw3-atividade-02-consumo-api-react.git
```

Substitua `SEU-USUARIO` pelo usuário ou organização responsável pelo repositório.

### 2. Acessar a pasta

```bash
cd dw3-atividade-02-consumo-api-react
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:

http://localhost:3000

## Testes e validação

O projeto foi testado manualmente para verificar:

- Carregamento do catálogo com dados da API.
- Alternância entre as três categorias.
- Acesso à página de detalhes por categoria e ID.
- Funcionamento do retorno ao catálogo.
- Exibição de imagens alternativas.
- Responsividade em diferentes larguras de tela.

Também foram utilizados os comandos:

```bash
npm run lint
npm run build
```

A compilação de produção foi concluída com sucesso. O ESLint apresentou um aviso não impeditivo relacionado ao uso de imagens HTML externas.

## Objetivo acadêmico

Aplicar os conceitos estudados na disciplina Desenvolvimento Web III, especialmente:

- Componentes React e JSX.
- Props e reutilização de componentes.
- Hooks `useState` e `useEffect`.
- Rotas dinâmicas com Next.js.
- Consumo de APIs públicas utilizando Axios.
- Manipulação de dados JSON.
- Organização e estilização de interfaces web.

---
## Aplicação publicada

O Beer Map está hospedado na Vercel e pode ser acessado pelo endereço:

https://beer-map-zeta.vercel.app/

A aplicação utiliza React e Next.js para consumir dados da API pública SampleAPIs, sem necessidade de desenvolver um backend próprio.

**FATEC Registro — Desenvolvimento Web III — Atividade 02, 2º bimestre.**
