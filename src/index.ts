import 'dotenv/config';
import { AppDataSource } from './config/database';
import app from './app';

AppDataSource.initialize().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});

