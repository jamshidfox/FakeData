import express from 'express';
import serverless from 'serverless-http';
import Cartoons from '../route/Cartoons.mjs';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.use('/cartoons', Cartoons);

const serverlessApp = serverless(app);

export const handler = async (event, context) => {
  // you can do other things here
  const result = await serverlessApp(event, context);
  // and here
  return result;
};
