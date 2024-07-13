import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  products?: any[];
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const { page = 1, size = 10 } = req.query;
    const organization_id = '2e8a2d8c71b84a4eaf175c662ddc23e4';
    // const APP_ID = 'P3CB2HTF3DFRZHK';
    // const API_KEY = 'c9d4df22c02a4d32a2cbedb25da76fcb20240712121317360578';
    const Appid = 'P3CB2HTF3DFRZHK';
    const Apikey = 'c9d4df22c02a4d32a2cbedb25da76fcb20240712121317360578';

    try {
      const response = await axios.get(`https://api.timbu.cloud/products`, {
        params: {
          organization_id,
          reverse_sort: false,
          page,
          size,
          Appid,
          Apikey,
        //   APP_ID,
        //   API_KEY,
        },
      });
      res.status(200).json({ products: response.data.items });
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Failed to fetch products.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
