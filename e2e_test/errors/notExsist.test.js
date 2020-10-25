const server = require('../../server');
const axios = require('axios');
const faker = require('faker');

const PORT = process.env.APP_PORT_TEST;
const request = axios.create({
  validateStatus: () => true,
});

describe('error handler work', ()=> {
  let _server;

  beforeAll(async () => {
    // before all test run server
    await new Promise(resolve => {
      _server = server.listen(PORT, resolve);
    });
  });


    it('should trigger notExsist middleware', async ()=>{
        const wrongRoute = faker.random.word();
        const response = await request.get(`http://localhost:${PORT}/${wrongRoute}`);

        expect(response).toBeDefined();
        expect(response.status).toEqual(404);
});
    afterAll( () => {
   _server.close();
  });
});
