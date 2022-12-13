import AWS from "aws-sdk";

import { CONFIG } from "../config";
import { TData } from "../types/types";

AWS.config.update(CONFIG.aws);
const DYNAMODB = new AWS.DynamoDB.DocumentClient();

const selectItemFromDB = async (
  tableName: TData,
  key: string,
  value: string
) => {
  return new Promise((resolve, reject) => {
    try {
      const params = {
        TableName: tableName,
        Key: {
          [key]: value,
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

export default selectItemFromDB;
