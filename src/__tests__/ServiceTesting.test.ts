import { getDatabase } from '../services'

describe('Service testing', () => {
  test('call service', () => {
    const database = getDatabase()
    const dataFromDB = database.collections.get('photos').query().fetch()
    console.log(dataFromDB)
  })
})
