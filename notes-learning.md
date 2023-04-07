
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
- 
