import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import { AppDataSource } from './data-source';
import productRouter from './routes/ProductRoutes';

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

// const PORT = process.env.PORT || 5000;

//set static file untuk image
app.use(express.static('./src/assets'));

//inisialisasi express.json, semua req yg dikirim dalam bentuk json
app.use(express.json());

app.use(productRouter);

app.listen(process.env.APP_PORT, () => {
  console.log(`server jalan tuan, di port ${process.env.APP_PORT}`);
});
