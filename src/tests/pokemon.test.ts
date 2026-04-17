import request from 'supertest';
import { describe, it, expect, beforeEach, beforeAll,afterAll } from '@jest/globals';
import { AppDataSource } from '../config/database';
import app from '../app';

describe("Pokemon", () => {

    let token: string;
    beforeAll(async () => {
        const response = await request(app)
            .post('/auth/login')
            .send({
                username: 'admin',
                password: 'password'   
            });
        token = response.body.token;
        
        await AppDataSource.initialize();
    });

    afterAll(async () => {
        await AppDataSource.destroy();
    });

    it("should access with a valid token", async () => {
        const response = await request(app)
            .get('/pokemon')
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });

    it("should not access without a token", async () => {
        const response = await request(app)
            .get('/pokemon');
        expect(response.status).toBe(401);
    });
});
