import item from './queries/item'
import createItem from './mutations/createItem'
import updateItem from './mutations/updateItem'
import deleteItem from './mutations/deleteItem'

export default {
  Query: {
    item,
  },
  Mutation: {
    createItem,
    updateItem,
    deleteItem,
  },
}
