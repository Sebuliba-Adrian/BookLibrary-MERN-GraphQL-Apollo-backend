const express = require("express");
const graphqlHttp = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

app = express();

app.use(cors());
const uri = "mongodb+srv://adrian:Qwerty123!@cluster0-jxq2l.mongodb.net/graphql-db?retryWrites=true&w=majority";
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true});
mongoose.connection.once('open', ()=>{
  console.log("DB Connected!");
})
app.use(
  "/graphql",
  graphqlHttp({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Server running!");
});
