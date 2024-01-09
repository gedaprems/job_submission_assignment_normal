const mongoose = require("mongoose");

// DataBase Connections
const dbConnect = () => {
  const mongodbURI = process.env.DATABASE_URI;
  mongoose.connect(mongodbURI, {
    useNewUrlParser: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Connected to DB");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Error to connect to db ", err);
  });
};

module.exports = dbConnect;
