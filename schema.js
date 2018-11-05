'use strict';

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    foo: String
  }
  
  type Schema {
    query: Query
  }
`);

const resolvers = {
  foo: () => 'bar',
};

const query = `
  query myFirstQuery {
    foo
  }
`;

// chce query w oparciu o schema i wezmie dane w oparciu o resolvery
graphql(schema, query, resolvers)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))