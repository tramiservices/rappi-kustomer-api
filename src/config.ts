import dotenv from 'dotenv';

dotenv.config();

export const configuration = {
    nodeEnv: process.env.NODE_ENV,
    nodePort: process.env.PORT,
    apiKey: process.env.API_KEY,
    database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
};