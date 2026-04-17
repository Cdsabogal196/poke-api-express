import express from 'express';
import pokemonRoutes from "./routes/pokemon.routes";
import authRoutes from './routes/auth.routes';

const app = express();

app.use(express.json());

app.use('/', pokemonRoutes);
app.use('/auth', authRoutes);

export default app;