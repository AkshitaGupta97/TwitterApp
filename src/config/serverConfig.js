
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export const PORT = process.env.PORT || 3000; // it means if PORT is not defined in .env file, use 3000 as default, else use the value from .env file

export const MONGO_DB_URL = process.env.MONGO_DB_URL