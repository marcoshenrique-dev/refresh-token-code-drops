import express, {Request, Response, NextFunction} from 'express';
require('express-async-errors');

import { router } from './routes';

const app = express();
app.use(express.json());

app.use(router);


app.use((error: Error , _request: Request, response: Response, _next: NextFunction) => {
  console.log(error);
  response.status(500).json({
    status: 'Error',
    message: error.message
  });
});

app.listen(3000, () => console.log('Server is running on port http://localhost:3000'));