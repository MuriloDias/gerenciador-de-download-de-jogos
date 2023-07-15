# GerenciadorJogos

O objetivo do projeto foi criar um site que distribui download de jogos, o cadastro de jogos é feito pro meio de uma tela restrita e somente usuários previamente cadastrados podem alterar os jogos e os usuários que tem esse acesso.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Protótipos - figma
https://www.figma.com/file/YGsHJvaikdUxy7jtN46q6n/Untitled?type=design&node-id=4%3A27&t=XUPAOUNDnTwk9Plz-1

## Endereço de Deploy - GitHub Pages

https://murilodias.github.io/gerenciador-de-download-de-jogos/

OBS: Para execução da aplicaçao no githubpages a pagina se encontra em branco devido a uma limitação da propria ferramente que não permite a configuração do json-server
para que funcione corretamente precisaria ser modificado o codigo para que a consulta do json-server fosse mudada para uma api que responderia ao endereço solicitado. Então possivelmente a aplicação não funcionaria no githubpages da forma que se encontra, várias tentativas foram feitas para que o githubpages se comunicasse com o json-server local mas sem sucesso ainda.

## Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [x] Construir páginas web com o conceito de componentes.
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [x] Mapear componentes à rotas no módulo de rotas.
- [x] Criar navegação entre páginas por meio de rotas.
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [x] Validar campos do formulário com REGEX e apresentar os erros.
- [x] Desabilitar o botão de submit enquanto o formulário está inválido.
- [x] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [x] Cadastrar uma entidade no JSON Server.
- [x] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [x] Usar a diretiva ngIf
- [x] Formatar a apresentação de dados com Pipes.
- [x] Build e deploy da aplicação.

## Manual de execução
- Clonar o repositório com `git clone`
- Fazer checkout no branch `main` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto 
- Instalar as dependências contidas no `package.json`
  - Comando: `npm i`
- (Opcional) Instalar o JSON Server globalmente disponível em `https://www.npmjs.com/package/json-server`
  - Comando: `npm i -g json-server` 
  - É opcional porque a dependência já vem cadastrada no arquivo `package.json` para instalação local na pasta `node_modules`
- Executar a API "Fake" (JSON Server) via um dos seguintes comandos: 
  - Execução com o terminal dentro da pasta do projeto execute via script registrado no `package.json`: `npm run json:server:routes` 
  - Ou via Execução explícita: `json-server --watch db.json --routes routes.json`
- O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json` e `routes.json`.
  - Por padrão, a aplicação JSON Server executa no endereço `localhost:3000`    
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
  - Comando: `ng s -o`
