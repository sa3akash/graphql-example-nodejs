// GraphQL schema definition  
const { GraphQLSchema, GraphQLObjectType } = require("graphql");  
const { register, login, addPost } = require("./mutation");  
const { users, user, posts, post } = require("./queries");

// Define query type  
const QueryType = new GraphQLObjectType({  
  name: "QueryType",  
  description: "Queries",  
  fields: {
    users,
    user,
    posts,
    post
  },  
});  

// Define mutation type  
const MutationType = new GraphQLObjectType({  
  name: "MutationType",  
  description: "Mutation",  
  fields: {  
    register,
    login,
    addPost
  },  
});  

module.exports = new GraphQLSchema({  
  query: QueryType,  
  mutation: MutationType,  
});  