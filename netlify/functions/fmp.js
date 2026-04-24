exports.handler = async (event) => {
  const path = event.queryStringParameters.path;
  const url = `https://financialmodelingprep.com/api/v3/${path}&apikey=LhrEgOwBRiGpwjSimLVt1AuZjbSoKpln`;
  const r = await fetch(url);
  const data = await r.text();
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: data,
  };
};
