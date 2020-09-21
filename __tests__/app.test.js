const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('returns hi when path is /', async() => {
    const response = await request(app)
      .get('/');
    
    expect(response.text).toEqual('hi');
  });

  it('returns hi when path is /', async() => {
    const response = await request(app)
      .post('/echo')
      .send('hello again');
    
    expect(response.text).toEqual('hello again');
  });  
});
