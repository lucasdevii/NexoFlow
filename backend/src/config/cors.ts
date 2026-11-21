import cors from 'cors'

const allowedOrigins = process.env.FRONTEND_URLS
  ?.split(',')
  .map(origin => origin.trim()) ?? []

export const corsConfig = cors({
  origin: (origin, callback) => {
    // Permite clientes sem Origin, como Insomnia e cURL.
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true)
    }

    return callback(new Error('Origin not allowed by CORS'))
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
})