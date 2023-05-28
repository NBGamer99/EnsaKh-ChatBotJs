var router = require('express').Router();
var runIntent = require("./dialogflow").runIntent;
const messageSchema = require("../../models/messages.module");



// const session = sessionStorage.getItem();

router.get("/", function(req, res){
	res.send("Hello from backend!");
});

router.get('/chat/:name', function(req, res) {
	const sessionToken = req.params.name;
	const currentUserChatHistModel = mongoose.model(
		`msg_hist_${sessionToken}`,
		messageSchema
	);

	currentUserChatHistModel
		.find({})
		.then((messages) => {
			res.send(messages);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send('Internal Server Error');
		});
});

// /api/requestText POST
router.post("/requestText", function(req, res) {
    console.log(req.body);
    const currentUserChatHistModel = mongoose.model(`msg_hist_${req.body.sessionToken}`, messageSchema);

    runIntent(req.body.projectId, req.body.requestText)
        .then(result => {
            const userMessage = new currentUserChatHistModel({
                _id: new mongoose.Types.ObjectId(),
                sessionId: req.body.sessionToken,
                userOwner: true,
                text: req.body.requestText,
                date: req.body.dateu
            });

            const botMessage = new currentUserChatHistModel({
                _id: new mongoose.Types.ObjectId(),
                sessionId: req.body.sessionToken,
                userOwner: false,
                text: result.Response,
                date: new Date().toDateString()
            });

            return Promise.all([userMessage.save(), botMessage.save(), result]);
        })
        .then(([userMessage, botMessage, result]) => {
            res.send({
                responseMessage: result.Response,
                originalQuery: result.Query,
                intent: result.intent
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Internal Server Error");
        });
});

module.exports = router;
