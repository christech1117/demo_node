import express from 'express'
// import moment from 'moment'
import polly from '../model/polly'
const router = express.Router()

router.get('/', async(req, res) => {
  const data = await polly.get(req.query)
  res.status(200).json({
    data: data,
    message: 'success',
    status: 'success'
  })
})

router.post('/result', async(req, res) => {
  const data = await polly.fetchResult(req.body)
  res.status(200).json({
    data: data,
    message: 'success',
    status: 'success'
  })
})

router.post('/', async(req, res) => {
  const data = await polly.store(req.body)
  res.status(200).json({
    data: data,
    message: 'success',
    status: 'success'
  })
})

module.exports = router
