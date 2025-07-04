import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool1 } from './config/db';
import {BA, US} from './routes/routes_all';


const app = express();

export const api = () => {  
  app.use(cors());
  app.use(express.json());
  app.use("/BA", BA.Services);
}

api();


dotenv.config();
const PORT = process.env.BA_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

