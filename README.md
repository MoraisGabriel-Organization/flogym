# App Flogym

Api de uma aplicação de realização de check-ins em academias

## RFs - Requisitos Funcionais

- [ ] Deve ser possível se cadastrar
- [ ] Deve ser possível se autenticar
- [ ] Deve ser possível obter o perfil de um usuário logado
- [ ] Deve ser possível obter o número de check-ins realizado pelo usuário logado
- [ ] Deve ser possível o usuário obter seu históricos de check-ins
- [ ] Deve ser possível o usuário buscar academias pelo nome
- [ ] Deve ser possível o usuário realizar check-in em uma academia(funcionalidade core)
- [ ] Deve ser possível validar check-in de um usuário
- [ ] Deve ser possível cadastrar uma academia


## RNs - Regras de Negócios

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado
- [ ] Usuário não pode fazer dois check-ins no mesmo dia
- [ ] O usuário não pode fazer check-in se não estiver perto(100m) da academia
- [ ] O check-in só pode ser validado até 20min após ser criado
- [ ] O check-in só pode ser validado por administradores
- [ ] A a academia só pode ser cadastrada por administradores

## RNFs - Requisitos não Funcionais

- [ ] A senha do usuário deve estar criptografados
- [ ] Os dados da aplicação precisam estar persistidos em um banco de dados PostgreSQL
- [ ] Todas lista de dados precisam estar paginados com 20 itens por paginas
- [ ] O usuário deve ser identificado por um jwt(Json Web Token)

# Tecnologias

- Node.js
- Fastify
- Typescript
- Zod
