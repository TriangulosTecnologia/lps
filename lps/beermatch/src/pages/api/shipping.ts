/* eslint-disable @typescript-eslint/no-unused-vars */
// import fetch from 'node-fetch';
import type { NextApiRequest, NextApiResponse } from 'next';

const calculateShipping = async ({ cep }: { cep: string }) => {
  const options = {
    method: 'POST',
    hostname: 'www.jadlog.com.br',
    path: '/embarcador/api/frete/valor',
    headers: {
      'Content-Type': 'application/json',
      Authorization: '',
    },
    maxRedirects: 20,
  };

  const postData = JSON.stringify({
    frete: [
      {
        cepori: '14801140',
        cepdes: cep,
        frap: null,
        peso: 8.3,
        cnpj: '30488828000100',
        tpentrega: 'D',
        tpseguro: 'N',
        vldeclarado: 240.85,
        vlcoleta: null,
        modalidade: 3,
      },
    ],
  });

  return 1000;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  const price = await calculateShipping(JSON.parse(req.body));

  res.status(200).json({ price });
}

// var options = {
//   'method': 'POST',
//   'hostname': 'www.jadlog.com.br',
//   'path': '/embarcador/api/frete/valor',
//   'headers': {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOjgzNDA3LCJkdCI6IjIwMjEwNjA5In0.0qImHkS_vMdCXryYgr83yadfp2JP-ojQ5kspMkDJGL4'
//   },
//   'maxRedirects': 20
// };

// var req = https.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function (chunk) {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });

//   res.on("error", function (error) {
//     console.error(error);
//   });
// });

// var postData = JSON.stringify({
//   "frete": [
//     {
//       "cepori": "14801140",
//       "cepdes": "95050230",
//       "frap": null,
//       "peso": 8.3,
//       "cnpj": "30488828000100",
//       "tpentrega": "D",
//       "tpseguro": "N",
//       "vldeclarado": 240.85,
//       "vlcoleta": null,
//       "modalidade": 3
//     }
//   ]
// });

// req.write(postData);

// req.end();
