import express from 'express'
import polly from '../controllers/polly'

const router = express.Router()

router.use('/polly', polly)
router.get('/', (req, res) => res.send())

module.exports = router
