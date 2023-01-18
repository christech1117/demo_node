import mongoose from 'mongoose'
// import _ from 'lodash'
import schema from './schema.js'
import logger from './logger.js'
const mongoHost = process.env.MONGO_HOST
const mongoPrimeHost = process.env.MONGO_PRIME_HOST
const mongoPort = process.env.MONGO_PORT
const mongoUser = process.env.MONGO_USER
const mongoPass = process.env.MONGO_PASS
const schemas = {}
let mongoUrl = ''

const option = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  keepAlive: true,
  poolSize: 10,
  socketTimeoutMS: 45000,
  keepAliveInitialDelay: 30000,
  useUnifiedTopology: true
}

if (!mongoHost || !mongoPort) logger.error('Missing mongo host/port setting!!')

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'stage') {
  option.user = mongoUser
  option.pass = mongoPass
  if (mongoPrimeHost) {
    mongoUrl = `mongodb://${mongoPrimeHost}:${mongoPort},${mongoHost}:${mongoPort}?replicaSet=${process.env.APP_ENV === 'production' ? 'rs-prod' : 'rs'
      }&readPreference=secondary`
  } else {
    mongoUrl = `mongodb://${mongoHost}:${mongoPort}/polly_demo`
  }
} else {
  mongoUrl = `mongodb://${mongoHost}:${mongoPort}/polly_demo`
}

console.log(mongoUrl, option)
mongoose.connect(mongoUrl, option).catch(err => console.log(err))

Object.keys(schema).forEach(key => {
  schemas[key] = mongoose.model(key, schema[key])
})

const mongo = {
  async fetchPolls(data) {
    return await schemas.polls.find({}).catch(err => err)
  },
  async fetchResult(data) {
    return await schemas.poll_answer.find({ id: data.id }).catch(err => err)
  },
  async store(data) {
    return await schemas.poll_answer.create(data).catch(err => err)
  }
}

module.exports = mongo
