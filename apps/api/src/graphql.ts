import * as express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { readFileSync } from 'fs'
import { buildSchema, GraphQLSchema } from 'graphql'
import User from './user'

const apiRouter = express.Router()

const root = {
    hello: User
}

var schema: GraphQLSchema | null = null

apiRouter.use('/', graphqlHTTP({
    schema: schema ? schema : schema = buildSchema(readFileSync('schema.graphql', { encoding: 'utf-8' })),
    rootValue: root,
    graphiql: true,
}));

export default apiRouter