const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const contact = require('./routes/contactRouter');

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











// const express = require('express');
// const cors = require('cors');
// const { connectToDB } = require('./db');
// const patients = require('./routes/patients');
// const alerts = require('./routes/alerts');
// const passwordReset = require('./routes/passwordReset');
// const medicalConditions = require('./routes/medicalConditions');
// const speechToText = require('./routes/speechToText');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT;
// app.use(express.json());
// app.use(cors());

// app.use('/api/patients', patients);
// app.use('/api/alerts', alerts);
// app.use('/api/reset-password', passwordReset);
// app.use('/api/medicalConditions', medicalConditions);
// app.use('/api/speechToText',speechToText);

// const startApp = async () => {
//     try {
//         await connectToDB();
//         app.listen(port, () => {
//             console.log(`Server listening at http://localhost:${port}`);
//         });
//     } catch (error) {
//         console.error('Error starting the app:', error);
//     }

// };

// startApp();




// ###

// const cloudinaryConfig =require('../config/cloudinaryConfig') ;
// // import '../config/cloudinaryConfig.js';
// const bodyParser = require("body-parser");
// const therapistRouter = require("../routes/therapistRouter");
// const sendEmailRouter = require("../routes/sendEmailRouter");
// const patientRouter = require("../routes/patientRouter");
// const userRouter = require("../routes/userRouter");
// const wordRouter = require("../routes/wordRouter");
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const cloudinaryRouter = require('../routes/cloudinary');
// require("dotenv").config();


// const app = express();
// const PORT = process.env.PORT;
// const MONGO_DB_URL = process.env.DB_URL;

// // Use Cloudinary configuration
// cloudinaryConfig;

// mongoose.connect(MONGO_DB_URL);
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, X-New-Token"
//   );
//   res.header("Access-Control-Expose-Headers", "X-New-Token");
//   next();
// });
// app.use(cors());
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });
// app.use("/therapist", therapistRouter);
// app.use("/patient", patientRouter);
// app.use("/sendEmail", sendEmailRouter);
// app.use("/user", userRouter);
// app.use("/words", wordRouter);
// app.use("/cloudinary", cloudinaryRouter);
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


