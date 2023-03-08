# soccer-team-manager

Essa é uma API básica de futebol criada usando o framework Express.js. A API permite que você liste times, crie novos times, atualize times existentes e exclua times.

# Como instalar e usar

### Clone este repositório: 

git clone https://github.com/JoeyHetfield/soccer-team-manager.git


### Instale as dependências:  

npm install


### Inicie o servidor: 
npm start

### Acesse a API em http://localhost:3001/teams

### Rotas disponíveis 

GET /
Essa rota retorna uma mensagem de boas-vindas ao acessar a API.

GET /teams
Essa rota retorna todos os times cadastrados.

GET /teams/:id
Essa rota retorna um time específico, com base no ID passado como parâmetro.

POST /teams
Essa rota cria um novo time, com base nos dados enviados no corpo da requisição.

PUT /teams/:id
Essa rota atualiza um time existente, com base no ID passado como parâmetro e nos dados enviados no corpo da requisição.

DELETE /teams/:id
Essa rota exclui um time existente, com base no ID passado como parâmetro.
