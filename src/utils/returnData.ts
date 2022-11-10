import AWS from "aws-sdk";

import { CONFIG } from "../config";

AWS.config.update(CONFIG.aws);
const DYNAMODB = new AWS.DynamoDB.DocumentClient();

const returnData = async () => {
  return new Promise((resolve, reject) => {
    try {
      const params = {
        TableName: "dynamo-scala",
        Key: {
          id: 1,
          name: "test1",
        },
      };

      DYNAMODB.get(params, (err, data) => {
        if (!err) {
          resolve(data.Item);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};

export default returnData;
