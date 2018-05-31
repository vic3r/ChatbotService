const express = require('express');
const bodyParser = require('body-parser');
const verification = require('./controllers/verification')

const app = express();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Webhook in port ${PORT}`));

const verificationController = require('./controllers/verification');
const messageWebhookController = require('./controllers/messageWebhook');

app.get('/', verificationController);
app.post('/', messageWebhookController);