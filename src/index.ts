import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import { AppDataSource } from './data-source';
import productRouter from './routes/ProductRoutes';
import cors from 'cors';

const app = express();

const initializeApp = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connection established');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

// Panggil fungsi initializeApp agar dijalankan
initializeApp();

app.get('/', (req: Request, res: Response) => {
  res.send('goodluck nang...');
});

const originUrls = process.env.ORIGIN_URL?.split(',');
app.use(
  cors({
    credentials: true,
    origin: originUrls,
    // origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
  })
);

//set static file untuk image
app.use(express.static('./src/assets'));

//inisialisasi express.json, semua req yg dikirim dalam bentuk json
app.use(express.json());

app.use(productRouter);

app.listen(process.env.APP_PORT, () => {
  console.log(`server jalan tuan, di port ${process.env.APP_PORT}`);
});
