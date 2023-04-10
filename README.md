
# API para cardápio online

Essa é uma API construída como serviço para cardápios online. 


## Tecnologias

A API foi construída utilizando as tecnologias de Typescript e NodeJS, no framework ExpressJS.

Para autenticação foram usadas as bibliotecas de criptografia e segurança Bcrypt e JWT.

Como banco de dados foi utlizado o MongoDB Cloud.


## Rodando a API em servidor local

Para rodar a API na sua máquina, basta clonar esse repositório, instalar as dependências através do comando "npm install" e iniciar a aplicação através do comando "npm start".

Para conectar ao banco você deve criar uma conta no MongoDB Cloud e no arquivo .env você deve substituir os campos DB_USER e DB_PASSWORD com as suas informações.
## Swagger

Para uma melhor documentação da API foi utilizado a tecnologia Swagger. A documentação está disponível através do endpoint: https://localhost:3000/api-docs.