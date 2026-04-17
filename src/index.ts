import 'dotenv/config';
import { AppDataSource } from './config/database';
import app from './app';

AppDataSource.initialize().then(() => {
  app.listen(process.env.port, () => {
    console.log('Server is running on port 3000');
  });
});

