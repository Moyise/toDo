const { books } = require("../fakeData");

const resolvers = {
  Query: {
    getAllBooks: () => books,
  },

  Mutation: {
    createBook: (parent, args) => {
      const newBook = args;
      books.push(newBook);
      return newBook;
    },
  },
};

module.exports = { resolvers };
