"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const pokemon_1 = require("../entities/pokemon");
exports.AppDataSource = new typeorm_1.DataSource({
    type: process.env.dbtype,
    host: process.env.dbhost,
    port: process.env.dbport,
    username: process.env.dbusername,
    password: process.env.dbpassword,
    database: process.env.dbdatabase,
    synchronize: true,
    entities: [pokemon_1.Pokemon],
});
//# sourceMappingURL=database.js.map