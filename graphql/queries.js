
const { GraphQLList } = require("graphql")

const { User } = require("../models")
const { UserType } = require("./types")


const users = {
    type: new GraphQLList(UserType),
    resolve: async (parent, args) => {
        return await User.find({})
    }
}

module.exports = { users }