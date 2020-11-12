import AWS from 'aws-sdk'
import { Item } from '../../generated/schema'

async function item(_: unknown, input: { id: string }): Promise<Item> {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()

  const params = {
    TableName: process.env.ITEM_TABLE,
    Key: {
      itemId: input.id,
    },
  }

  const { Item } = await dynamoDb.get(params).promise()

  return {
    ...Item,
    id: Item.itemId,
  }
}

export default item
