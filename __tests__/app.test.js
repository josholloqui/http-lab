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

  it('returns red html when path is /red', async() => {
    const response = await request(app)
      .get('/red');
    
    expect(response.text).toEqual('<html><body><h1>red</h1></body></html>');
  });

  it('returns green html when path is /green', async() => {
    const response = await request(app)
      .get('/green');
    
    expect(response.text).toEqual('<html><body><h1>green</h1></body></html>');
  });

  it('returns blue html when path is /blue', async() => {
    const response = await request(app)
      .get('/blue');
    
    expect(response.text).toEqual('<html><body><h1>blue</h1></body></html>');
  });

  it('returns not found when path is not real /fake', async() => {
    const response = await request(app)
      .get('/fake');
    
    expect(response.text).toEqual('Not Found');
  });
});
