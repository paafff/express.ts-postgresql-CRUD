import { DataSource, createConnection } from 'typeorm';
import { products } from './entity/Product';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'paafff',
  database: 'dbcrud',
  synchronize: true,
  logging: true,
});

export const initializeDB = async () => {
  try {
    const connection = createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'paafff',
      database: 'dbcrud',
      synchronize: true,
      logging: true,
      entities: [products],
    });
    // await AppDataSource.initialize();

    console.log('Database connection established');

    return connection;
  } catch (error) {
    console.error('Database connection failed:', error);
    // Lakukan penanganan error sesuai kebutuhan Anda
  }
};

// Panggil fungsi initializeDB agar dijalankan
// initializeDB();
