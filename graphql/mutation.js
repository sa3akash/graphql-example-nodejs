const { GraphQLString } = require("graphql");
const { User } = require("../models");
const { createToken } = require("../utils/auth");

// Define the register mutation correctly
const register = {
  type: GraphQLString,
  args: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
    const { username, email, password, displayName } = args;

    const exist = await User.findOne({ email });
    if (exist) {
      throw new Error("User already exists");
    }

    const user = new User({
      username,
      email,
      password,
      displayName,
    });

    await user.save();

    const token = createToken({
      id: user._id,
      username,
      email,
      displayName,
    });

    return token;
  },
};

const login = {
  type: GraphQLString,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
    const { email, password } = args;

    const user = await User.findOne({ email }).select("+password");

    if (!user || user.password !== password) {
      throw new Error("Invalid credentials");
    }

    const token = createToken({
      id: user._id,
      username: user.username,
      email: user.email,
      displayName: user.displayName,
    });

    return token;
  },
};

// Export the register mutation
module.exports = { register, login };
