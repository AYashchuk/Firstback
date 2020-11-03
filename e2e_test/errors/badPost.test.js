const server = require('../../server');
const connection = require('../../src/lib/dbConnection');
const axios = require('axios');
const faker = require('faker');
const PORT = process.env.APP_PORT_TEST;

<<<<<<< HEAD:e2e_test/errors/badPost.test.js
const request = axios.create({
  validateStatus: () => true,
});


describe('error Handling for failed validation', () =>{
  let _server;

  beforeAll(async () => {
    // before all test run server
    await new Promise(resolve => {
      _server = server.listen(PORT, resolve);
    });
=======
const PORT = process.env.APP_PORT_TEST;

beforeAll(async () => {
  // before all test run server
  await new Promise((resolve) => {
    _server = server.listen(PORT, resolve);
>>>>>>> be8ee8a0615466eee38a3f34b52de60c6e933f34:src/errors/test/badPost.test.js
  });
});

<<<<<<< HEAD:e2e_test/errors/badPost.test.js
    it('should return an error', async ()=>{
        const postUser = {
           username: null,
           password: faker.internet.password(),
        };

       const response = await request.post(`http://localhost:${PORT}/register`, postUser);
        expect(response).toBeDefined();
        expect(response.status).toEqual(500);
    });
    afterAll( () => {
=======
describe('error Handling for failed validation', () => {
  it('should return an error', async () => {
    const postUser = {
      username: null,
      password: faker.internet.password(),
    };
    expect.assertions(2);
    try {
      await axios.post(`http://localhost:${PORT}/register`, postUser);
    } catch (e) {
      console.log(e);
      expect(e).toBeDefined();
      expect(e.response.status).toEqual(500);
    }
  });
  afterAll(async () => {
>>>>>>> be8ee8a0615466eee38a3f34b52de60c6e933f34:src/errors/test/badPost.test.js
    connection.close();
    _server.close();
  });
});
