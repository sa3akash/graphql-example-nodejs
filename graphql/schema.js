// required graphql modules
const { GraphQLSchema, GraphQLObjectType } = require("graphql");

// import queries

// import mutations

// define query type
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: 'Queries',
    fields: {}
})
// define mutarion type
const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: 'Mutation',
    fields: {}
})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})