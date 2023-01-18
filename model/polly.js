import mongo from '../lib/mongo'

const user = {
  async get(req, res) {
    return await mongo.fetchPolls(req)
  },
  async fetchResult(req, res) {
    return await mongo.fetchResult(req)
  },
  async store(req) {
    const data = {
      id: req.id,
      answer: req.answer,
      created_at: Date.now(),
      updated_at: Date.now()
    }
    return mongo.store(data)
  }
}

module.exports = user
