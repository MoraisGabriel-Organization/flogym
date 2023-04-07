
## PostgreSQL com Docker

- Acessando o docker hub, podemos encontrar diversas imagens, porem a imagem que vamos utilizar é o da "bitnami" ao invés da imagem oficial do postgres. Pois a bitnami já faz alguns tratamentos de segurança. [Link da image bitnami]('https://hub.docker.com/r/bitnami/postgresql')

- Em seguida vamos realizar uma config para conseguir definir o user para o banco logo na primeira execução. dessa forma o nosso comando ficará da seguinte forma

```bash
  docker run --name postgresql -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=flogym -p 5432:5432 bitnami/postgresql
```

- Após ter criado e testado, você pode iniciar o docker a qualquer momento com o comando a seguir

```bash
  #para iniciar o container
  docker start nome-do-container
  
  #para parar o container
  docker stop nome-do-container

```
## Arquivo Docker Compose 

- Basicamente se trata de um arquivo que dita todos os container que a aplicação precisa criar para que a aplicação funcione

- Dessa forma qualquer pessoa que acessar for trabalhar ou executar a aplicação, vai conseguir executar de forma rápida e prática

- Então para definirmos essa configuração criamos um arquivo do chamada `docker-compose.yml`.
Em seguida vamos traduzir o comando  que realizamos para criar o docker, para essa estrutura do `.ylm` do arquivo do docker compose.

- Após termos o arquivo com o comando em `.ylm`, executamos o seguinte comando: 

```bash
  docker compose up -d
```
