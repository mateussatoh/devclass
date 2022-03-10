<!-- <p align="center">
<img src="https://user-images.githubusercontent.com/60144554/153733357-c1c4ce5c-a7fa-4e92-a573-93855d443518.png" />
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/60144554/153733082-88037e8a-9ed6-4a79-9bf7-829e56a03b04.png" />
</p> -->

## Sobre

Aplicação fullstack desenvolvida em [NestJS](), [PrismaORM](), [ReactJS]() e [AntDesign]() para uma plataforma de cadastro e gerenciamento de aulas e módulos de aulas para dev's. O sistema consiste em um CRUD de usuários, módulos e aulas implementado com regra de negócio além de autenticação JWT com [PassportJS]().

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
cd devclass/server/ && yarn
docker-compose up

# Em um terminal separado e em devclass/server
npx prisma generate
npx prisma migrate dev --name init


# Schema in src/database/schema.sql
# After the database is created switch to it witn "\c mycontacts" to create tables and add extensions
```

## Entities

### Contact

```json
{
   "name": "Mateus Satoh",
   "email": "mateussatoh@gmail.com",
   "phone": "+55 21 12345-6789",
   "category_id": "create-the-category-first"
}
```

### Category

```json
{
   "name": "Work"
}
```

## Routes

### Contacts

| `/contacts` |                 |                    |     |
| ----------- | --------------- | ------------------ | --- |
| **Method**  | **Route**       | **Description**    |
| GET         | `/contacts/:id` | get one contact    |
| GET         | `/contacts`     | get all contacts   |
| DELETE      | `/contacts/:id` | delete one contact |
| POST        | `/contacts`     | create one contact |
| PUT         | `/contacts/:id` | update one contact |

### Categories

| `/categories` |               |                     |     |
| ------------- | ------------- | ------------------- | --- |
| **Method**    | **Route**     | **Description**     |
| GET           | `/categories` | get all categories  |
| POST          | `/categories` | create one category |
