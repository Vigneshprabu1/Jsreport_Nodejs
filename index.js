const express = require('express');
 //var cors = require('cors');

// var mongo = require('mongodb');
const bodyParser = require('body-parser');

// create express app
const app = express();
//app.use(cors());

var port =process.env.PORT || 3001;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


var options = {
  "server": {
   "socketOptions": {
    "keepAlive": 300000, 
    "connectTimeoutMS": 30000 
		} 
	},
  "replset": { 
  	"socketOptions": { 
  		"keepAlive": 300000, 
  		"connectTimeoutMS": 30000 
		} 
	}
}



// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to product  application. buy quickly. Organize and keep track of all your purchases."});
});

//For specifying routes 
require('./app/routes/Report.routes.js')(app);


// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port "+port);
});
