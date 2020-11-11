# Serverless GraphQL API Boilerplate

A Serverless GraphQL API boilerplate using:

- [Typescript](https://www.typescriptlang.org/)
- [AWS Lambda](https://aws.amazon.com/fr/lambda/)
- [AWS DynamoDB](https://aws.amazon.com/fr/dynamodb/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

You can try it with [GraphQL Playground](https://okak59wk56.execute-api.us-east-1.amazonaws.com/dev/graphql).

## Scripts

- Import types from graphql schema

```sh
yarn schema-type
```

- Build the project

```sh
yarn build
```

- Launch local server (make sure to build before)

```sh
yarn start
```

- Deploy to AWS (make sure to build before)

```sh
yarn deploy
```
