# Giphy Challenge

Application built with Ionic + Angular + NestJS + TypeORM + PostgreSQL

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

## Running the project

- Go to frontend folder and run the project, after installing all the dependencies.
```
npm install
ionic serve
```

- Make sure you have a postgreSQL instance running on your enviromnent.
- Go to your terminal and run `psql -U {superuser}` command with the superuser you created on installation process.
- Run these commands:
```
create database {database_name};
create user {user_name} with encrypted password ‘{password}’;
grant all privileges on database {database_name} to {user_name};
\c {database_name}
grant all on schema public to {user_name};
```
- Configure your database settings on `ormconfig.ts`.
- After that, go to backend folder and run the project.
```
yarn install
yarn db:migrate
yarn start
```
