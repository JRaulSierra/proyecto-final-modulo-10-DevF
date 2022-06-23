import express from 'express';
import config from './config/index.js';
import morgan from 'morgan';
import { userRoutes } from './routes/index.js';

const api = express();

api.use(morgan('tiny'));
api.use(express.json());
api.use(morgan("dev"));
api.use(userRoutes);

api.get('/status', (req, res) => {
    return res.json({
        msg: 'Api funcionando',
    });
});

api.use((err, req, res, next) => {
    if (
      config.server.enviroment === 'development' ||
      config.server.enviroment === 'local' ||
      config.server.enviroment === 'test'
    ) {
      return res.status(500).json({
        msg: 'Error',
        error: err,
      });
    }
    return res.status(500).json({
      msg: 'Ha ocurrido un error en el server, comunícate con un desarrollador',
    });
  });
  
  export default api;
