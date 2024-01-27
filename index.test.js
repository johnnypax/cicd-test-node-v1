const request = require('supertest');
const { app, close } = require('./index');

describe('Test degli endpoint API', () => {
    it('GET di / dovrebbe restituire Hello World', async () => {
        const res = await request(app).get('/');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ message: 'Hello World!' })
    })

    it('GET di /client dovrebbe restituire Hello client', async () => {
        const res = await request(app).get('/client');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ message: 'Hello client!' })
    })

    afterAll(done => {
        close();
        done();
    })
})