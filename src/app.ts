import express from 'express';
import cors from 'cors';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app = express();

/* parser */
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: [
      'https://sabbir-protfolio-dashboard.vercel.app',
      'http://localhost:3001',
      'http://localhost:5174',
      'https://sabbir-portfolio.netlify.app',
      'http://localhost:5173',
    ],
  }),
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/* Module routes */
app.use('/api/v1', router);
/* Error handling */
app.use(globalErrorHandler);
app.use(notFound);

export default app;
