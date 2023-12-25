import { Request, Response } from 'express';
import { products } from '../entity/Product';
import { AppDataSource } from '../data-source';

import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
import fs from 'fs';

// type;

const storageSettings = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, 'src/assets/productImage');
  },
  filename: (req: Request, file: Express.Multer.File, cb) => {
    const uniqueFileName = `${uuidv4()}-${Date.now()}.png`;
    cb(null, uniqueFileName);
  },
});

// Multer middleware dengan konfigurasi storage
const uploadFile = multer({ storage: storageSettings }).fields([
  { name: 'imageProduct', maxCount: 1 },
  // { name: 'imageProduct', maxCount: 1 },
  // { name: 'imageProduct', maxCount: 1 },
]);

export const createProduct = async (req: Request, res: Response) => {
  uploadFile(req, res, async (error) => {
    if (error) {
      return res
        .status(500)
        .json({ msg: 'terjadi kesalahan pada unggahan file' });
    }

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    const imageProductName = files[`imageProduct`][0].filename;

    //opsi secara langsung
    // const imageProductName = (req.files as { [fieldname: string]: Express.Multer.File[] })['imageProduct'][0].filename;;

    const imageProductURL = `${process.env.APP_DOMAIN}/productImage/${imageProductName}`;

    const { name, price } = req.body;

    try {
      console.log('🚀 ~ file: Product.ts:8 ~ createProduct ~ name:', name);
      const createProduct = new products();
      createProduct.name = name;
      createProduct.price = price;
      createProduct.imageName = imageProductName;
      createProduct.imageURL = imageProductURL;

      await AppDataSource.manager.save(createProduct);

      res.status(200).json({ msg: 'berhasil menambah produk' });
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  });
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const response = await AppDataSource.getRepository(products).find();

    //opsi, ada dua cara melakukan operasi pada typeorm, dengan entity manager/getrepository
    // const response = await AppDataSource.manager.find(products);

    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductsById = async (req: Request, res: Response) => {
  try {
    const response = await AppDataSource.manager.findOne(products, {
      where: { uuid: req.params.uuid },
    });

    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const findProduct = await AppDataSource.manager.findOne(products, {
      where: { uuid: req.params.uuid },
    });

    if (
      findProduct?.imageName != 'zero.png' &&
      findProduct?.imageName !== null
    ) {
      fs.unlinkSync(`./src/assets/productImage/${findProduct?.imageName}`);
    }

    await AppDataSource.manager.remove(findProduct);

    res.status(200).json(`berhasil menghapus produk`);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  uploadFile(req, res, async (error) => {
    if (error) {
      return res
        .status(500)
        .json({ msg: 'terjadi kesalahan dalam unggahan file' });
    }
  });

  // const productRepository = AppDataSource.getRepository(products);

  // const findProduct = await productRepository.findOneBy({
  //   uuid: req.params.uuid,
  // });
  const findProduct = await AppDataSource.getRepository(products).findOneBy({
    uuid: req.params.uuid,
  });

  if (findProduct?.imageName != 'zero.png' && findProduct?.imageName !== null) {
    fs.unlinkSync(`./src/assets/productImage/${findProduct?.imageName}`);
  }

  //opsi secara langsung
  // const imageProductName = (req.files as { [fieldname: string]: Express.Multer.File[] })['imageProduct'][0].filename;;
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  const imageProductName = files[`imageProduct`]
    ? files[`imageProduct`][0].filename
    : findProduct?.imageName;

  const imageProductURL = `${process.env.APP_DOMAIN}/productImage/${imageProductName}`;

  try {
    const { name, price } = req.body;

    // const updateData = findProduct;
    // findProduct!.name = name;
    // findProduct!.price = price;
    // findProduct!.imageName = imageProductName;
    // findProduct!.imageURL = imageProductURL;

    const updateData = {
      name: name || findProduct?.name,
      price: price || findProduct?.price,
      imageName: imageProductName,
      imageURL: imageProductURL,
    };

    await AppDataSource.manager.update(products, findProduct, updateData);

    res.status(200).json('berhasil melakukan update data');
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};
