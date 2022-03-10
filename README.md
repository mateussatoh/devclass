<!-- <p align="center">
<img src="https://user-images.githubusercontent.com/60144554/153733357-c1c4ce5c-a7fa-4e92-a573-93855d443518.png" />
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/60144554/153733082-88037e8a-9ed6-4a79-9bf7-829e56a03b04.png" />
</p> -->

## Sobre

Aplicação fullstack desenvolvida em [NestJS](), [PrismaORM](), [Postgres](), [Docker]() [ReactJS]() e [AntDesign]() para uma plataforma de cadastro e gerenciamento de aulas e módulos de aulas para dev's. O sistema consiste em um CRUD de usuários, módulos e aulas implementado com regra de negócio além de autenticação JWT com [PassportJS]() .

## Tech's

-  Docker
-  NestJS
-  PrismaORM
-  ReactJS
-  Ant Design
-  Postgres

## Quickstart

```sh
git clone https://github.com/mateussatoh/devclass.git
# SERVER
cd devclass/server/
docker-compose up -d
yarn
npx prisma generate
npx prisma migrate dev --name init
yarn start

#WEB
cd devclass/web/
yarn && yarn start
```

## Routes

### Auth

| `/auth`    |               |                    |
| ---------- | ------------- | ------------------ |
| **Method** | **Route**     | **Description**    |
| GET        | `/auth/login` | retrieve JWT token |

### User

| `/contacts` |                 |                    |     |
| ----------- | --------------- | ------------------ | --- |
| **Method**  | **Route**       | **Description**    |
| GET         | `/contacts/:id` | get one contact    |
| GET         | `/contacts`     | get all contacts   |
| DELETE      | `/contacts/:id` | delete one contact |
| POST        | `/contacts`     | create one contact |
| PUT         | `/contacts/:id` | update one contact |

### User

| `/users`   |              |                           |
| ---------- | ------------ | ------------------------- |
| **Method** | **Route**    | **Description**           |
| DELETE     | `/users/:id` | delete one user (private) |
| POST       | `/users`     | create one user (private) |
| PATCH      | `/users/:id` | patch one user            |

### Modules

| `/modules` |                |                             |
| ---------- | -------------- | --------------------------- |
| **Method** | **Route**      | **Description**             |
| GET        | `/modules/:id` | get one module              |
| GET        | `/modules`     | get all modules             |
| DELETE     | `/modules/:id` | delete one module (private) |
| POST       | `/modules`     | create one module (private) |
| PATCH      | `/modules/:id` | patch one module (private)  |

### Classes

| `/classes` |                |                            |
| ---------- | -------------- | -------------------------- |
| **Method** | **Route**      | **Description**            |
| GET        | `/classes/:id` | get one class              |
| GET        | `/classes`     | get all classes            |
| DELETE     | `/classes/:id` | delete one class (private) |
| POST       | `/classes`     | create one class (private) |
| PATCH      | `/classes/:id` | patch one class (private)  |
