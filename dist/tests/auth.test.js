"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const globals_1 = require("@jest/globals");
const app_1 = __importDefault(require("../app"));
(0, globals_1.describe)("Auth", () => {
    (0, globals_1.it)("should login a user", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post('/auth/login')
            .send({
            username: 'admin',
            password: 'password'
        });
        (0, globals_1.expect)(response.status).toBe(200);
        (0, globals_1.expect)(response.body).toHaveProperty('token');
    });
    (0, globals_1.it)("wrong credentials", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post('/auth/login')
            .send({
            username: 'admin',
            password: 'password12345'
        });
        (0, globals_1.expect)(response.status).toBe(401);
    });
});
//# sourceMappingURL=auth.test.js.map