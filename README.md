<p align="center">
  <img alt="Your icon here" src="./assets/icon.png" width="100"/>
</p>
<h1 align="center">
  List Movie App
</h1>

<!-- Badges -->
<p align="center">
  <!-- if your  -->
  <a href="https://github.com/gledson-ss/dti-test/graphs/commit-activity" alt="Maintenance">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-1EAE72.svg" />
  </a>

  <!-- License -->
  <a href="./LICENSE" alt="License: MIT">
    <img src="https://img.shields.io/badge/License-MIT-1EAE72.svg" />
  </a>

  <br/>

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gledson-ss/dti-test?color=blue">

  <!-- GitHub repo size -->
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/gledson-ss/dti-test">

  <!-- Social -->
  <a href="https://github.com/gledson-ss/dti-test/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/gledson-ss/dti-test?style=social">
  </a>
</p>

<!-- summary -->
<p align="center">
  <a href="#clipboard-description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-whats-inside">What's inside?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :clipboard: Description

- Um App Mobile desenvolvido com React Native, que tem como objetivo listar os 10 primeiros filmes retornados na pesquisa, no qual a entrada é por meio de título e ano do filme, porém o ano é opcional. Além disso o usuário tem a opção de ordenar a lista de filmes por nome ou média de rating (nota de avaliações), de forma decrescente ou crescente. E por fim, o usuário pode clicar em um dos itens retornados da pesquisa que o levará para uma segunda tela com informações mais detalhadas sobre o filme escolhido. O arquivo .apk para download encontra-se na descrição desse repositório.

## :rocket: Getting Started

1. Download the repository

- Using Git

```shell
  git clone https://github.com/gledson-ss/dti-test
```

1. Installation

- Using `yarn`

```shell
yarn
```

- Using `npm`

```shell
npm install
```

3. Execution Emulator or Web

- Using `yarn`

```shell
 yarn android
 or
 yarn ios
 or
 yarn web
```

- Using `npm`

```shell
npm run android
or
npm run ios
or
npm run web
```

## 🧐 What's inside?

### :building_construction: Technologies

- [React Native](https://github.com/facebook/react-native)
  - Ferramenta exigida para a criação das interfaces do app, além de ser uma das que mais gosto de utilizar.
- [Expo](https://expo.dev/)
  - Framework que possui um sistema muito amplo de ferramentas para auxiliar a crição do App com o react.
- [React Redux](https://react-redux.js.org/)
  - Ferramenta exigida pelo desafio para armazenar os contextos da aplicação, porém existe outras alternativas que também satisfaz esse aspecto, como o proprio context api do react ou o zustand.
- [Styled Components](https://styled-components.com/)
  - Framework muito bom para criação de componentes, pois é bastante flexível e possui muitas ferramentas.
- [Axios](https://axios-http.com/docs/intro)
  - Ferramenta que satisfaz o a necessidade de requisições da aplicação.
- [Typescript](https://www.typescriptlang.org/)
  - Linguagem de programação exigida pelo desafio, além de aumentar o poder de produtividade combinado com o intellisense de um editor de texto, como o vs code.

### :lipstick: Linter tools

- [ESLint](https://eslint.org/)
  - Ferramenta muito poderosa para permitir um codigo mais padronizado e estiloso, além de conseguir contar com a auto identação combinado com um editor de texto, sem se preocupar em padronizar o codigo manualmente.

### :page_with_curl: Git tools

- [husky](https://www.npmjs.com/package/husky)
  - Ferramenta que expõe uma API para utilizar os hooks do git utilizando o package.json e assim, pode ser versionado e validar os commits.
- [commitlint](https://commitizen-tools.github.io/commitizen/)
  - Ferramenta para manter um padrão e versionamento automatico dos commits.

### 🖌️ Development Methodology

- [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
  - Método para manter a estrutura de componetização do projeto mais organizado e padronizado.

## :memo: License

This project is under the MIT license. See the file [LICENSE](LICENSE) for more details.

---

Build with 💙 By [gledson.dev](https://gledson.dev)
