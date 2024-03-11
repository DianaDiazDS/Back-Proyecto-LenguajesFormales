
const supertest = require('supertest');
 const app = require('../testServer.js');  
 const request = supertest(app);

describe('Cliente CRUD', () => {
    it('debería encontrar un cliente por ID', async () => {
       const id = '5'; 
       const response = await request.get(`/client/${id}`);
       expect(response.status).toBe(200);
       expect(response.body.state).toBe(true);
       // Aquí puedes agregar más expectativas basadas en los datos del cliente
    });
   
    it('debería encontrar un cliente por nombre de usuario', async () => {
       const username = 'diana'; 
       const response = await request.get(`/client/username/${username}`);
       expect(response.status).toBe(200);
       expect(response.body.state).toBe(true);
       
    });
   
    it('debería eliminar un cliente por ID', async () => {
       const id = '8'; 
       const response = await request.delete(`/client/${id}`);
       expect(response.status).toBe(200);
       expect(response.body.state).toBe(true);
      
    });
   });