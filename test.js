const request = require('supertest');
const app = require('../ci-cd-project/app');

describe('GET /', () => {
    it('should return "Hello, CI/CD Pipeline!"', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Hello, CI/CD Pipeline!');
        expect(res.status).toBe(200);
    });
});
