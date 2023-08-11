const { v4 } = require("uuid");
const AWS = require("aws-sdk");

//const middy = require("@middy/core");
//const httpJSONBodyParser = require("@middy/http-json-body-parser");

const addFilm = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { title, director,producer,episodio} =JSON.parse(event.body);
  const createdAt = new Date();
  const id = v4();

  

  const newFilm = {
    id,
    title,
    director,
    producer,
    episodio,
    createdAt,
    done: false,
  };

  await dynamodb
    .put({
      TableName: "StWarsFilm",
      Item: newFilm,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newFilm),
  };
};

module.exports = {
  //addTask: middy(addTask).use(httpJSONBodyParser()),
  addFilm,
};
