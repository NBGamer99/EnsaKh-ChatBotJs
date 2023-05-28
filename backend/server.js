
var express = require("express"),
bodyParser = require("body-parser"),
session = require("express-session"),
cors = require("cors"),
	dialogflowIndex = require("./routes/api"),
	mainRoute = require("./routes"),
	errorhandler = require("errorhandler");
	fs = require('fs');
	path = require('path');
	mongoose = require("mongoose");

// MongoDb database
const mongoUrl = `mongodb://127.0.0.1:27017/ChatBotJs`;
const mongoOptions = {
	useNewUrlParser: true,
	useCreateIndex: true, // Create indexes if they don't exist
	useUnifiedTopology: true, // Use the new connection management engine
	autoIndex: true, // Automatically build indexes (optional)
};

mongoose.connect(mongoUrl, mongoOptions).then(() => {
		console.log("mongodb [chat] is connected");
	})
	.catch((err) => {
		console.error("db connection error:", err);
	});


var isProduction = process.env.NODE_ENV === "production";

// Set the Credential file as a global environment variable

const envDir = '/home/abmola/Desktop/ChatBotJs/.env';
const files = fs.readdirSync(envDir);

const jsonFile = files.find(file => path.extname(file) === '.json');

if (jsonFile) {
  const filePath = path.join(envDir, jsonFile);
  process.env.GOOGLE_APPLICATION_CREDENTIALS = filePath;
} else {
  console.error('No JSON file found in the .env directory.');
}

var app = express();

app.use(cors());

app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("method-override")());
app.use(express.static(__dirname + "/public"));

app.use(session({ secret: "conduit", cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if (!isProduction) {
	app.use(errorhandler());
}

app.use("/", mainRoute);
app.use("/api", dialogflowIndex);

app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message,
			error: {},
		},
	});
});

var server = app.listen(process.env.PORT || 3000, function () {
	console.log("Listening on port: " + server.address().port);
});
