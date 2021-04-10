const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI =
    process.env.NODE_ENV === "test"
      ? process.env.TEST_MONGO_URI
      : process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB connected${
        process.env.NODE_ENV === "test" ? " to test database" : ""
      }: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
