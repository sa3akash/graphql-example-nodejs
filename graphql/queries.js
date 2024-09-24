const { GraphQLList, GraphQLID } = require("graphql");

const { User, Post } = require("../models");
const { UserType, PostType } = require("./types");

const users = {
  type: new GraphQLList(UserType),
  description: "Get all users",
  resolve: async (parent, args) => {
    return await User.find({});
  },
};

const user = {
  type: UserType,
  description: "Get user by id",
  args: { id: { type: GraphQLID } },
  resolve: async (parent, args) => {
    return await User.findById(args.id);
  },
};

const posts = {
  type: new GraphQLList(PostType),
  description: "Get all posts",
  resolve: async (parent, args) => {
    return await Post.find({});
  },
};

const post = {
  type: PostType,
  description: "Get post by id",
  args: { id: { type: GraphQLID } },
  resolve: async (parent, args) => {
    return await Post.findById(args.id);
  },
};

module.exports = { users, user, posts, post };
