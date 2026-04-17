import "reflect-metadata";
import { DataSource } from "typeorm";
import { Pokemon } from "../entities/pokemon";

export const AppDataSource = new DataSource({
    type: process.env.dbtype as any,
    host: process.env.dbhost,
    port: process.env.dbport as any,
    username: process.env.dbusername,
    password: process.env.dbpassword,
    database: process.env.dbdatabase as any,
    synchronize: true,
    ssl: { rejectUnauthorized: false },
    entities: [Pokemon],
});