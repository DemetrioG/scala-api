import AWS from "aws-sdk";
import { Key } from "aws-sdk/clients/dynamodb";

import { CONFIG } from "../config";
import { TData } from "../types/types";

AWS.config.update(CONFIG.aws);
const DYNAMODB = new AWS.DynamoDB.DocumentClient();

interface IScanDB {
  FilterExpression: string;
  ExpressionAttributeNames: {};
  ExpressionAttributeValues: {};
  ExclusiveStartKey?: Key;
}

type TReturnData = [
  AWS.DynamoDB.DocumentClient.ItemList,
  AWS.DynamoDB.DocumentClient.Key
];

const executeQuery = async (
  params: IScanDB & { TableName: string }
): Promise<TReturnData> => {
  return new Promise((resolve, reject) => {
    try {
      DYNAMODB.scan(params, (err, data) => {
        if (!err) {
          resolve([data.Items, data.LastEvaluatedKey] as TReturnData);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};

const scanItemsFromDB = async (tableName: TData, scan: IScanDB) => {
  const response: object[] = [];
  const params = {
    TableName: tableName,
    ...scan,
  };

  while (true) {
    const [items, lastKey] = await executeQuery(params);
    response.push(...items);

    if (lastKey) {
      params["ExclusiveStartKey"] = lastKey;
    } else {
      break;
    }
  }

  return response;
};

export default scanItemsFromDB;
