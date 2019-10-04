const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

//dummy data
var books =[
    {name: 'Name of the Wind', genre: 'Fantasy', id:'1'},
    { name: 'The Final Empire', genre: 'Fantasy', id: '2'},
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' }
]
const BookType = new GraphQLObjectType({ //create book time
  name: "Book",
  fields: () => ({
      id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({ // How we jump into graph
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
          args: { id: { type: GraphQLID } },
      resolve(parent, args){
          return books.find(book => book.id == args.id);
          //code to get data from db / other source
      }
    }
  }
});
module.exports = new GraphQLSchema({
    query: RootQuery
})