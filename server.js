var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server


// Require all models


var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));

app.use(bodyParser.json()); 
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("dist"));

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB





app.post('/contact', function (req,res, error, next) {
 
  var msg = {
  to: 'fwgumbs@gmail.com',
  from: req.body.email,
  subject: 'New codit Inquiry',
  text:req.body.name+ ' '+ req.body.message
  
};
sgMail.send(msg);
alert("thank you will get back to you shortly")
res.send('index.html')

 
})

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
