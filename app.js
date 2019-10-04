const express = require('express');
const graphqlHttp = require('express-graphql');

app = express();

app.use('/graphql', graphqlHttp({
    
}));

app.listen(4000, ()=>{
  console.log("Server running!");
});