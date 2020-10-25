const server = require('../../server');
const connection = require('../../src/lib/dbConnection');
const axios = require('axios');
const faker = require('faker');
const PORT = process.env.APP_PORT_TEST;

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
  });

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
    connection.close();
   _server.close();
  });
});
