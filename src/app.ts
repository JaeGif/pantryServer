import express from 'express';
const app = express();

import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3001, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
