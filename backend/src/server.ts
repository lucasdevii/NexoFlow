import express from 'express'
import { corsConfig } from './config/cors'

const app = express()

app.use(corsConfig)
app.use(express.json())

app.get('/hello', (req, res) => {
  return res.json({
    message: 'Hello from NexoFlow!',
  })
})

const PORT = Number(process.env.PORT) || 8000

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})