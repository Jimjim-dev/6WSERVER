const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/process_post", urlencodedParser, (req, res) => {
	response = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
