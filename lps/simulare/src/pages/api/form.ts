import type { NextApiRequest, NextApiResponse } from 'next';

import graphql from '../../services/graphql';

/**
 * We retrieve this ID accessing the board on browser. URL has the
 * `/boards/$BOARD_ID format.
 */
const BOARD_ID = process.env.MONDAY_BOARD_ID;

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

  /**
   * You can define the columns values performing the GraphQL query:
   *
   * ```graphql
   * query {
   *   boards(ids:[$BOARD_ID]) {
   *    name
   *    id
   *     groups {
   *       id
   *       title
   *     }
   *     columns {
   *       id
   *       title
   *       type
   *     }
   *   }
   * }
   * ```
   *
   * The `columnValues` keys are the columns ids of the response. Each column
   * has its special interface that you we can access here:
   * https://api.developer.monday.com/docs/guide-to-changing-column-data
   */
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

  const itemName = `Protótipo - ${name}`;

  return `mutation {
    create_item(
      item_name: "${itemName}",
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

    const { data } = await graphql.post('/', { query });

    const error = data.errors || data.error_code;

    if (error) {
      return res
        .status(400)
        .json({ message: 'Error on Monday api request', error });
    }

    return res.status(201).json({ message: 'Created with success!' });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error on Monday api request', error: error.message });
  }
}
