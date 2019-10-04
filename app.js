const express = require('express');
const graphqlHttp = require('express-graphql');
const schema = require('./schema/schema');

app = express();

app.use('/graphql', graphqlHttp({
 schema : schema,
 graphiql: true
}));

app.listen(4000, ()=>{
  console.log("Server running!");
});