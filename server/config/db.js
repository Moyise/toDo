const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const client = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("MongoDB Connected:" + client.connection.host);
  } catch (error) {
    console.error("Error:" + error);
    process.exit(1);
  }
};

module.exports = { connectDB };
