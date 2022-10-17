import request from 'supertest'
import app from '../../src/app.js'

test('deve responder Fullstack Challenge 20201030', () => {
    return request(app).get('/').then((res) => {
        expect(res.status).toBe(200)
        expect(res.text).toBe('Fullstack Challenge 20201030')
    })
})