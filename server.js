const express = require('express');
const cors = require('cors');

const loginRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/registerRoute');

const app = express();
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(loginRoute);
app.use(registerRoute);

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
