import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });
import request from 'supertest';
import { describe, it, expect } from '@jest/globals';
import app from '../app';

describe("Auth", () => {
    it("should login a user", async () => {
        const response = await request(app)
            .post('/auth/login')
            .send({
                username: 'admin',
                password: 'password'
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');   
    });

    it("wrong credentials", async () => {
        const response = await request(app)
            .post('/auth/login')
            .send({
                username: 'admin',
                password: 'password12345'
            });

            expect(response.status).toBe(401);
    });
});

