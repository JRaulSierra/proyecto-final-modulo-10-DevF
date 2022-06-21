import dotenv from 'dotenv';

dotenv.config();

export default {
    server: {
        port : process.env.PORT || 3000,
        environment: process.env.NODE_ENV || 'local'
    }
}
