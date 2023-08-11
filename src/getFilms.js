const AWS = require("aws-sdk");

const getFilms = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamodb.scan({ TableName: "StWarsFilm" }).promise();

  const tasks = result.Items;

  return {
    status: 200,
    body: {
      tasks,
    },
  };
};


module.exports = {
  getFilms,
};
