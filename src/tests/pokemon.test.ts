import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });

console.log('Contenido de process.env.dbtype:', process.env.dbhost);
jest.mock('typeorm', () => {
    const actual = jest.requireActual('typeorm');
    return {
        ...actual,
        DataSource: class MockDataSource extends actual.DataSource {
            constructor(options: any) {
                if (options) {
                    options.ssl = false;
                }
                super(options);
            }
        }
    };
});

import request from 'supertest';
import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import { AppDataSource } from '../config/database';
import app from '../app';

describe("Pokemon", () => {
    let token: string;

    beforeAll(async () => {
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize();
        }

        const response = await request(app)
            .post('/auth/login')
            .send({ username: 'admin', password: 'password' });
        token = response.body.token;
    });

    afterAll(async () => {
        if (AppDataSource.isInitialized) {
            await AppDataSource.destroy();
        }
    });

    it("should access with a valid token", async () => {
        const response = await request(app)
            .get('/pokemon')
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });

    it("should not access without a token", async () => {
        const response = await request(app).get('/pokemon');
        expect(response.status).toBe(401);
    });
});