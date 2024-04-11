const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const contact = require('./routes/contactRouter');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api/contact', contact);

const startApp = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server listening at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Error starting the app:', error);
    }
};
startApp();
