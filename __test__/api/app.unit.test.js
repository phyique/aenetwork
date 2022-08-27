const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../../app');
const userModel = require('../../model/user');

jest.mock('../../model/show');
let server = null;
const start = (port) => {
  try {
    server = app.listen(port, () => {
      console.log(`Api running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

start(3333);

jest.spyOn(userModel, 'findOne').mockResolvedValueOnce('mocked user document');
jest.spyOn(app, 'connect').mockResolvedValueOnce('mock connection');
jest.spyOn(app, 'on').mockResolvedValueOnce('mock connections');

const creatAuthToken = () => {
  const body = { _id: '200', email: 'example.com' };
  return jwt.sign({ user: body }, 'TOP_SECRET');
};

describe('api should save and return some values', () => {
  const token = creatAuthToken();
  it('should GET api/shows', async () => {
    const response = await request(app)
      .get('/api/shows')
      .set('Content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({});

    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.isSuccessful).toEqual(true);
  });

  it('should POST api/shows', async () => {
    const response = await request(app)
      .post('/api/shows')
      .set('Content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({});

    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.isSuccessful).toEqual(true);
  });

  it('should PUT api/shows', async () => {
    const response = await request(app)
      .put('/api/shows')
      .set('Content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.isSuccessful).toEqual(true);
  });

  it('should DELETE api/shows', async () => {
    const response = await request(app).delete('/api/shows/001')
      .set('Content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.data.deletedCount).toEqual(1);
  });
});

afterAll(() => {
  server.close();
  process.exit(1);
});
