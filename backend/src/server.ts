import dotenv from 'dotenv'

dotenv.config();

const PORT = Number(process.env.PORT);

import app from './app';

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});