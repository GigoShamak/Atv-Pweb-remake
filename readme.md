# Atividade Apache PWEB2

## Aula 1 - Init

Criada a base do repo

Usado um comando no Docker para direcionar todas as requisições de uma porta específica para a porta do Docker

`docker run -d --name aula-apache -p 8080:80 -v "${PWD}:/usr/local/apache2/htdocs/" httpd:2.4`

Para conferir se está ativo: `docker ps`

Criado o arquivo "sobre.html" para  testar rotas

Comando para remover o container do docker: `docker container rm /aula-apache`

Comando para trocar  a porta: `docker run -d --name aula-apache -p 8000:80 -v "${PWD}:/usr/local/apache2/htdocs/" httpd:2.4`

Comando para verificar as configurações do servidor `curl -v http://localhost:xxxxx/`

## Aula 2 - Da Web ao primeiro Express

O repositório agora possui uma API funcional capaz de listar todos os cursos e consultar um curso específico pelo ID.

server.js: 
Importação do Express para criar o servidor.

Configuração do express.json() para permitir o recebimento de dados no formato JSON.

Criação da rota principal (GET /), que retorna uma mensagem indicando que a API está funcionando.

Criação da rota (GET /cursos), que retorna a lista de todos os cursos.

Criação da rota (GET /cursos/:id), que permite buscar um curso pelo seu ID.

Implementação de tratamento de erro com status HTTP 404 quando um curso não é encontrado.

Inicialização do servidor na porta 3000.

src/dados/cursos.js
Separação dos dados dos cursos em um arquivo próprio.

Criação de uma lista fixa de três cursos utilizando um array de objetos.

Definição de propriedades como id, nome, cargaHoraria, nivel, preco e ativo.

Exportação dos dados utilizando export const cursos (exportação nomeada).

