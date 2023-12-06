import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import Routes from './routes/Routes.js';


dotenv.config();
const app = express();

const PORT = process.env.PORT;

const username = "chat";
const password = "chat";

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Error handling middleware
app.use(function(err, req, res, next)  {
    res.header ("Access-Control-Allow-Origin","*");
    res.header ("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header ("Access-Control-Allow-Headers","x-Requested-with,Content-Type,Accept,Authorization");
  
      next();
    console.error(err);
  });
app.use('/', Routes);