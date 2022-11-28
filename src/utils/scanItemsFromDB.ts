import AWS from "aws-sdk";

import { CONFIG } from "../config";
import { TData } from "../types/types";

AWS.config.update(CONFIG.aws);
const DYNAMODB = new AWS.DynamoDB.DocumentClient();

interface IScanDB {
  FilterExpression: string;
  ExpressionAttributeNames: {};
  ExpressionAttributeValues: {};
}

const scanItemsFromDB = async (tableName: TData, scan: IScanDB) => {
  return new Promise((resolve, reject) => {
    try {
      const params = {
        TableName: tableName,
        ...scan,
      };

      DYNAMODB.scan(params, (err, data) => {
        if (!err) {
          resolve([data.Items]);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};

export default scanItemsFromDB;
