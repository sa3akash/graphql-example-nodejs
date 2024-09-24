const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { connectDB } = require("./db/connect");
const { graphqlHTTP } = require("express-graphql");
dotenv.config();

const schema = require("./graphql/schema");
const {authenticate} = require("./middleware/auth")

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(authenticate)
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))


app.use((err,req,res,next)=>{
  const message = err.message || 'Internal Server Error';
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: message
  });
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
