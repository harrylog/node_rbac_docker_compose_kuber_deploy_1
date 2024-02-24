const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI_ATLAS, {
    useUnifiedTopology: true,
  });
  console.log(`MongoDB is connected ${conn.connection.host}`.yellow.underline);
};

module.exports = connectDB;
