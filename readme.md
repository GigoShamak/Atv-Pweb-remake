# Atividade Apache PWEB2

## Aula 1 - Init

Foi criada a pasta

Foi criado o html

Usado um comando no Docker para direcionar todas as requisições de uma porta específica para a porta do Docker

`docker run -d --name aula-apache -p 8080:80 -v "${PWD}:/usr/local/apache2/htdocs/" httpd:2.4`

Para conferir se está ativo: `docker ps`

Criado o arquivo "sobre.html" para  testar rotas

Comando para remover o container do docker: `docker container rm /aula-apache`

Comando para trocar  a porta: `docker run -d --name aula-apache -p 8000:80 -v "${PWD}:/usr/local/apache2/htdocs/" httpd:2.4`

Comando para verificar as configurações do servidor `curl -v http://localhost:xxxxx/`
