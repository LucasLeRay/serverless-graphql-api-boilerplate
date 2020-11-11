import AWS from 'aws-sdk'
import { CreateItemInput, Item } from '../../generated/schema'
import { v4 } from 'uuid'

async function createItem(
  _: unknown,
  { input }: { input: CreateItemInput },
): Promise<Item> {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()
  const id = v4()

  const params = {
    TableName: process.env.ITEM_TABLE,
    Item: {
      itemId: id,
      content: input.content,
    },
  }

  await dynamoDb.put(params).promise()

  return {
    ...input,
    id,
  }
}

export default createItem
