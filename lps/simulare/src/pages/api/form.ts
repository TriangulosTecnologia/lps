import type { NextApiRequest, NextApiResponse } from 'next';

import graphql from '../../services/graphql';

const BOARD_ID = 1504278890;

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const getMutation = ({ name, email, phone }: FormData) => {
  const phoneCleaned = phone
    .replace(' ', '')
    .replace('(', '')
    .replace(')', '')
    .replace('-', '');

  const columnValues = {
    phone: {
      phone: `+55${phoneCleaned}`,
      countryShortName: 'BR',
    },
    e_mail: {
      email,
      text: email,
    },
  };

  return `mutation {
    create_item(
      item_name: "${name}",
      board_id: ${BOARD_ID},
      column_values: ${JSON.stringify(JSON.stringify(columnValues))},
      group_id: "topics"
    ) {
      id
    }
  }`;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(404).send('');
  }

  try {
    const query = getMutation(req.body as FormData);

    console.log('query::', query);
    const { data } = await graphql.post('/', { query });

    console.log('response::', JSON.stringify(data, undefined, 2));

    if (data.errors) {
      return res.status(400).json({ message: 'Error on Monday api request' });
    }

    return res.status(201).json({ message: 'Created with success!' });
  } catch (error) {
    return res.status(400).json({ message: 'Error on Monday api request' });
  }
}
