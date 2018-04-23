const express = require('express');
const bodyParser = require('body-parser');

const app = express();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Webhook in port ${PORT}`));