import { ProductProps } from '@/libs/interface';
import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
    message: string
}
  

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductProps[]>
) {
    const products: ProductProps[] = [
      {
        productId: "generateU",
        heading: "Product 1",
        price: 19.99,
      },
      {
        productId: "genera",
        heading: "Product 2",
        price: 29.99,
      },
      {
        productId: "ge",
        heading: "Product 3",
        price: 9.99,
      },
      {
        productId: "geUniqueId",
        heading: "Product 4",
        price: 49.99,
      },
      {
        productId: "gerateUniqu",
        heading: "Product 5",
        price: 14.99,
      },
      {
        productId: "gateUniqu",
        heading: "Product 6",
        price: 39.99,
      },
      {
        productId: "ateUniqueId",
        heading: "Product 7",
        price: 24.99,
      },
      {
        productId: "geerateUniqu",
        heading: "Product 8",
        price: 79.99,
      },
      {
        productId: "genrateUnique",
        heading: "Product 9",
        price: 12.99,
      },
      {
        productId: "nerateUiqueId",
        heading: "Product 10",
        price: 59.99,
      },
    ];
  res.status(200).json(products)
}
