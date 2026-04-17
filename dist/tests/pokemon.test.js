"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const globals_1 = require("@jest/globals");
const database_1 = require("../config/database");
const app_1 = __importDefault(require("../app"));
(0, globals_1.describe)("Pokemon", () => {
    let token;
    (0, globals_1.beforeAll)(async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post('/auth/login')
            .send({
            username: 'admin',
            password: 'password'
        });
        token = response.body.token;
        await database_1.AppDataSource.initialize();
    });
    (0, globals_1.afterAll)(async () => {
        await database_1.AppDataSource.destroy();
    });
    (0, globals_1.it)("should access with a valid token", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .get('/pokemon')
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.status).toBe(200);
    });
    (0, globals_1.it)("should not access without a token", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .get('/pokemon');
        (0, globals_1.expect)(response.status).toBe(401);
    });
});
//# sourceMappingURL=pokemon.test.js.map