import { Request, Response } from 'express';
import { products } from '../entity/Product';
import { AppDataSource } from '../data-source';
import { Connection } from 'pg';
import { getConnection } from 'typeorm';
import { getRepository } from 'typeorm';

// type;
export const createProduct = async (req: Request, res: Response) => {
  // const { name: string, price: number, image: string } = req.body;

  try {
    const productRepository = getRepository(products);

    const createProduct = new products();
    createProduct.name = 'namaaa';
    createProduct.price = 111;
    createProduct.image = 'url-gambar';

    await productRepository.save(createProduct);

    res.status(200).json({ msg: 'berhasil menambah produk' });
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};
