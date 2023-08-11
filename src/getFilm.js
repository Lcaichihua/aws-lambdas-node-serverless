const AWS = require("aws-sdk");

const getFilm = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;

  const result = await dynamodb
    .get({
      TableName: "StWarsFilm",
      Key: { id },
    })
    .promise();

  const film = result.Item;

  return {
    status: 200,
    body: film,
  };
};

module.exports = {
  getFilm,
};
