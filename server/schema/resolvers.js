const User = require("../models/userModel");
const TaskList = require("../models/taskListModel");
const generateToken = require("../utils/generateToken");

const resolvers = {
  Query: {
    taskList: () => [],
  },

  Mutation: {
    signUp: async (_, { input }) => {
      try {
        const email = input.email;
        const name = input.name;
        const password = input.password;
        const userExists = await User.findOne({ email });
        if (userExists) {
          return {
            user: userExists,
            token: "token",
          };
        }

        // Save user to db
        const user = await User.create({
          name,
          email,
          password,
        });

        return {
          user,
          token: generateToken(user._id),
        };
      } catch (error) {
        return error;
      }
    },
    signIn: async (_, { input }) => {
      try {
        const email = input.email;
        const password = input.password;

        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
          return {
            user,
            token: generateToken(user._id),
          };
        } else {
          throw new Error("Invalid credentials");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    createTaskList: async (_, { title }) => {
      console.log(title);
    },
  },
};

module.exports = { resolvers };
