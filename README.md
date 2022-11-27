<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

A simple CRUD to learn the core concepts from Nest JS and Prisma.

## Installation

```bash
$ yarn
```

After that you'll need to run the db container, you can either use the command `yarn db:dev:up` or run direclty `docker compose up dev-db`

Also you'll need to run `prisma migrate dev`, so Prisma can setup our DB.

In order to see the db in the browser you can run `npx prisma studio`.

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## TODO: Test

## License

Nest is [MIT licensed](LICENSE).
