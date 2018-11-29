# My Reads - Projeto do Nanodegree em ReactJS da Udacity

A aplicação MyReads é uma implementação do primeiro projeto do Nanodegree Desenvolvedor React da Udadcity.

Essa aplicação simula uma estante de livros onde o usuário poderá selecionar e classificar os livros que leu, está lendo ou deseja ler. Foram utilizados um servidor de API e uma biblioteca cliente conforme fornecidos na especificação do projeto.

Foi desenvolvida em React usando o webpack JS como "bundler".

## Getting Started

Para executar a aplicação em sua máquina local, siga as instruções abaixo.

### Prerequisites

Pressupõe-se que você já possui o npm instalado em sua máquina. Caso contrário, você pode obtê-lo em https://www.npmjs.com/get-npm.

Para checar se você possui o npm instalado, rode o seguinte comando no terminal:

```
npm -v
```

### Installing

Após clonar o repositório para sua máquina, instale as dependências:

```
npm install
```

e execute a aplicação usando os seguintes comandos:


```
npm run start
```

ou

```
npm start
```

Esse comando irá executar o "webpack-dev-server" que irá servir os arquivos criados no diretório "distdev" em "localhost:8080". Caso uma aba em seu navegador não tenha sido aberta, acesse esse mesmo endereço.

Você deverá visualizar uma tela com livros categorizados em "Currently Reading", "Read" e "Want to Read".

Para mover algum livro de categoria ou removê-lo da biblioteca, clique no ícone localizado no canto superior direito do livro e selecione a categoria de destino ou a opção de remoção.

Para pesquisar novos livros e inserí-los a biblioteca, clique no ícone da lupa, no canto superior direito da tela, e digite o termo da pesquisa. Para incluir o livro na biblioteca, basta movê-lo para alguma categoria.

## Deployment

Atualmente somente as configurações visando desenvolvimento e depuração com uso do "webpack-dev-server" estão disponíveis.

## Built With

* [ReactJS](https://reactjs.org/) - Biblioteca JavaScript
* [Material UI](https://material-ui.com/) - React UI Framework
* [webpack](https://webpack.js.org/) - Bundler de módulos JavaScript


