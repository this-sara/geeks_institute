import express from 'express';
import dotenv from 'dotenv';
import { connectMongo } from '#@/databases/connect-mongo.js';
import routes from '#@/routes/index.js';

dotenv.config();
const app = express();
app.use(express.json());

// connect DB
connectMongo();

// routes
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
