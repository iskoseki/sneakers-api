const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const DBConection = async () => {
  // Mongoose configuration
  mongoose
    .connect(process.env.URL_DB)
    .then(() =>
      console.log(
        `--- ✅ Database connection established ${conn.connection.host} ---`
      )
    )
    .catch(
      (error) => console.log("--- ❌ Database connection rejected ---", error),
      process.exit(1)
    );
};

module.exports = DBConection;
