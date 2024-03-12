const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const routes = require('./routes')
const cors = require('cors')
const connection = require('./common/connect')

dotenv.config()

const app = express();

app.use(cors(
    {
        origin: 'https://localhost:3001',
        credentials: true,
    }
))

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello World! 1 2 3');
})

app.use(bodyParser.json())
routes(app);

app.listen(port, () => {
    console.log('Server listening on port', + port);
});