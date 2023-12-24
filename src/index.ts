import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import { AppDataSource, initializeDB } from './data-source';
import productRouter from './routes/ProductRoutes';

const app = express();

initializeDB();

app.get('/', (req: Request, res: Response) => {
  res.send('goodluck nang...');
});

// const PORT = process.env.PORT || 5000;

app.use(productRouter);

app.listen(process.env.APP_PORT, () => {
  console.log(`server jalan tuan, di port ${process.env.APP_PORT}`);
});
