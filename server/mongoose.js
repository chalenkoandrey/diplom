const url = "mongodb://127.0.0.1:27017/cafe";
const mongoose = require('mongoose');
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true
});
const db = mongoose.connection;
db.on('error', function (error) {
  console.log(error);
});
db.once('open', function () {
  console.info("Connected to DB");
})
module.exports.mongoose = mongoose;