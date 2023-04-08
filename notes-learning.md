
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


# Relacionamentos Banco de dados

- Relacionamento 1-1 => Um dado vai se relacionar com um dado em outra tabela
  - Provavelmente esse dado poderia estar na mesma tabela(deixado mais semântico) 

- Relacionamento 1-N => um dado pode estar relacionado com vários registros em outras tablas

- Relacionamento N-N => Um dado que pode estar relacionado com vários registros em "outra tabela", e - essa "outra tabela" pode estar vinculado com vários registros dessa primeira tabela

# Implementação de testes

- Para implementar os testes, basta instalar o Vitest com o comando a seguir:

```bash
  npm i -D vitest vite-tsconfig-paths
```

- Observe que também estaremos instalando outra dependência. Pois com ela iremos conseguir inserir uma configuração para conseguirmos utilizar o alias dos paths que configuramos lá dentro do `tsconfig.json`.

