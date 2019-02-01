
var mongoose = require('mongoose');

//you should change the following string to your own, remember to check yourUserName and yourPassword are the same as in the Atlas dashboard
const str = "mongodb://yourUserName:yourPassword@mydb-shard-00-00-sogmo.mongodb.net:27017,mydb-shard-00-01-sogmo.mongodb.net:27017,mydb-shard-00-02-sogmo.mongodb.net:27017/MyDB?ssl=true&replicaSet=MyDB-shard-0&authSource=admin&retryWrites=true"

const connect = (url = str, opts = {}) => {
  return mongoose.connect(
    url,
    { ...opts, useNewUrlParser: true }
  )
}

module.exports = connect;

