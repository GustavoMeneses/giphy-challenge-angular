# Giphy Challenge

Application built with Ionic + Angular + NestJS + PostgreSQL

## Requirements

- Node >= 16
- NestJS - 9
- Ionic - 6
- PostgreSQL >= 15
- NPM
- Yarn

## Setting up the environment

- Follow these steps to install Ionic: [Ionic](https://ionicframework.com/docs/intro/cli#install-the-ionic-cli)
- Follow these steps to install NestJS: [NestJS](https://docs.nestjs.com/first-steps#setup)
- Install PostgreSQL: [PostgreSQL](https://www.postgresql.org/download/)
- Make sure Node is installed and it's on the correct version. If you don't have it already, I recommend using [NVM](https://github.com/nvm-sh/nvm).

## Running 

- Go to frontend folder and run the project, after installing all the dependencies.
```
npm install
ionic serve
```

- Make sure you have a postgreSQL database running on your enviromnent.
- Configure your database settings on `ormconfig.ts`.
- After that, go to backend folder and run the project.
```
yarn install
yarn db:migrate
yarn start
```
