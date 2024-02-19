# Backend for Fazo Software CRM

<p align="center">
  <a href="https://fazo.dev/" target="blank"><img src="logo.jpg" width="100" alt="Fazo Logo" /></a>
</p>

## Installation

```bash
# npm
$ npm install

# pnpm
$ pnpm install

# yarn
$ yarn
```

#### After installation
First, create your own `.env` file in the root directory. You should write your own variables in it as in `.env.example`. Then run the following commands to create a database and tables in your PostgreSQL:
```bash
# create the sql migration code in your local folder
$ npx prisma migrate dev --create-only

# migrate the tables
$ npx prisma migrate dev

# create typescript types based on the tables
$ npx prisma generate
```

## Running the application

---

**with** `pnpm`

```bash
# run the application
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

---

**with** `npm`

```bash
# run the application
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

---

**with** `yarn`

```bash
# run the application
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## About

##### Version: 1.0
##### Technologies: [NestJS](https://nestjs.com) & [TypeScript](https://www.typescriptlang.org/)
##### Author: [Abdulloh Mamanazirov](https://github.com/Abdulloh-Mamanazirov/)
