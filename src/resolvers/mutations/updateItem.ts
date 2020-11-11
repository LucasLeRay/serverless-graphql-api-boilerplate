import AWS from 'aws-sdk'
import { UpdateItemInput, Item } from '../../generated/schema'

async function updateItem(
  _: unknown,
  { input }: { input: UpdateItemInput },
): Promise<Item> {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()

  const params = {
    TableName: process.env.ITEM_TABLE,
    Key: {
      itemId: input.id,
    },
    UpdateExpression: 'SET content = :content',
    ExpressionAttributeValues: {
      ':content': input.content || null,
    },
    ReturnValues: 'ALL_NEW',
  }

  const { Attributes } = await dynamoDb.update(params).promise()

  return {
    ...Attributes,
    id: Attributes.itemId,
  }
}

export default updateItem
