const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
} = require("graphql");
const { User, Post, Comment } = require("../models");

const UserType = new GraphQLObjectType({
    name: "User",
    description: "User Type",
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        displayName: { type: GraphQLString },
    }),
});

const CommentType = new GraphQLObjectType({
    name: "Comment",
    description: "Comment Type",
    fields: () => ({
        id: { type: GraphQLID },
        comment: { type: GraphQLString },
        user: {
            type: UserType,
            resolve(parant, args) {
                return User.findById(parant.userId);
            },
        },
        post: {
            type: PostType,
            resolve(parant, args) {
                return Post.findById(parant.postId);
            },
        },
    }),
});

const PostType = new GraphQLObjectType({
    name: "Post",
    description: "Post Type",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        author: {
            type: UserType,
            resolve(parant, args) {
                return User.findById(parant.authorId);
            },
        },
        comment: {
            type: new GraphQLList(CommentType),
            resolve(parant, args) {
                return Comment.find({postId: parant.id});
            },
        },
    }),
});


module.exports = {
    UserType,
    PostType,
    CommentType,
}