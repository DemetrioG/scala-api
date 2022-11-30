import AWS from "aws-sdk";
import { Key } from "aws-sdk/clients/dynamodb";

import { CONFIG } from "../config";
import { TData } from "../types/types";

AWS.config.update(CONFIG.aws);
const DYNAMODB = new AWS.DynamoDB.DocumentClient();

interface IScanDB {
  TableName: string;
  Select: string;
  ExclusiveStartKey?: Key;
}

type TReturnData = [
  AWS.DynamoDB.DocumentClient.ItemList,
  AWS.DynamoDB.DocumentClient.Key
];

const executeQuery = async (params: IScanDB): Promise<TReturnData> => {
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

const selectAllFromDB = async (tableName: TData) => {
  const response: object[] = [];
  const params = {
    TableName: tableName,
    Select: "ALL_ATTRIBUTES",
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

export default selectAllFromDB;
