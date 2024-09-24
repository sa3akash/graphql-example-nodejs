// GraphQL schema definition  
const { GraphQLSchema, GraphQLObjectType } = require("graphql");  
const { register, login } = require("./mutation");  
const { users } = require("./queries");

// Define query type  
const QueryType = new GraphQLObjectType({  
  name: "QueryType",  
  description: "Queries",  
  fields: {
    users
  },  
});  

// Define mutation type  
const MutationType = new GraphQLObjectType({  
  name: "MutationType",  
  description: "Mutation",  
  fields: {  
    register,
    login  
  },  
});  

module.exports = new GraphQLSchema({  
  query: QueryType,  
  mutation: MutationType,  
});  