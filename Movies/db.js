const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://User_1997:User_1234@cluster0.p3owx.mongodb.net/entertainment?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Connected to mongo successfully");
  });

  mongoose.connection.on("error", (err) => {
    console.log("this is error", err);
  });
};

module.exports = connectToMongo;
