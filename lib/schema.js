import mongoose from 'mongoose'

const { Schema } = mongoose

const mongoSchema = {
  polls: new Schema({
    id: Number,
    title: String,
    publishedDate: Number,
    answer: {
      type: { type: String },
      options: [{
        id: { type: Number },
        label: { type: String }
      }]
    }
  }, { versionKey: false }),
  poll_answer: new Schema({
    id: Number,
    answer: Object
  }, { versionKey: false })
}

module.exports = mongoSchema
