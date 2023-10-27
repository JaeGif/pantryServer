import express from 'express';
const app = express();

import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

import userRouter from './routes/user';
import pantryRouter from './routes/pantry';

require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', userRouter);
app.use('/api', pantryRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
