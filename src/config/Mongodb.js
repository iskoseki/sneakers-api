const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
//DB connection
function MongoConnection() {
  mongoose
    .connect(process.env.URL_DB)
    .then(() => console.log(`--- ✅ Database connection established ---`))
    .catch((error) =>
      console.log("--- ❌ Database connection rejected ---", error)
    );
}

module.exports = MongoConnection;
