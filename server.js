const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { connectDB } = require("./db/connect");
const { graphqlHTTP } = require("express-graphql");
dotenv.config();

const schema = require("./graphql/schema");


connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
