import { DataSource, createConnection, ConnectionManager } from 'typeorm';
import { products } from './entity/Product';

export const AppDataSource = new DataSource({
  type: 'postgres',
  // host: 'localhost',
  url: process.env.DATABASE_URL,
  // port: 5432,
  // username: 'postgres',
  // password: 'paafff',
  // database: 'dbcrud',
  synchronize: true,
  logging: true,
  entities: ['src/entity/**/*.ts'],
});

// export default AppDataSource;
