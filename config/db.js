const mongoose = require("mongoose");
require("dotenv").config();

//async await allows you to use await or then
const connectDB = async () => {
  try {
    mongoose.connect(
      process.env.MONG0_URI,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log(`MongoDB Connected`);
      }
    );
  } catch (error) {
    console.error(error);
    //exit with error
    process.exit(1);
  }
};

module.exports = connectDB;
