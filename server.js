var app = require('./app');
const connect = require('./db');
var port = process.env.PORT || 3001;

const start = async () => {
  try {    
    await connect();
    app.listen(port, function() {
      console.log('Express server listening on port ' + port);
    });
  } catch (e) {
    console.error(e)
  }
}

module.exports = start;
