import fs from 'fs'
import { ApolloServer } from 'apollo-server-lambda'

import resolvers from './resolvers'

const typeDefs = fs.readFileSync('./src/schema.graphql', 'utf8')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/dev/graphql',
  },
})

export const handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
})
