// Ce code configure la connexion à une base de données MongoDB en utilisant Mongoose
const mongoose = require("mongoose");
const databaseUrl =
  process.env.DATABASE_URL ||
  "mongodb+srv://kemal:Turque57@cluster0.hdy7idp.mongodb.net/?retryWrites=true&w=majority";

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true });
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
