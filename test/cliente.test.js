
const supertest = require('supertest');
 const app = require('../testServer.js');  
 const request = supertest(app);

describe('Cliente CRUD', () => {
    it('debería encontrar un cliente por ID', async () => {
       const id = '5'; 
       const response = await request.get(`/client/${id}`);
       expect(response.status).toBe(200);
       expect(response.body.state).toBe(true);
       
    });

    it('debería actualizar una cliente por ID', async () => {
        const id = '24'; 
        const updateInformation = {        
            name: "jorge Lara",
        };
        const response = await request.patch(`/client/${id}`).send(updateInformation);
        expect(response.status).toBe(200);
        expect(response.body.state).toBe(true);
        
     });

    it('debería guardar un nuevo cliente', async () => {
        const newClient = {
          id: 14,
          name: "Jorge Lopez",
          celphone: 3114543489,
          email: "gorge@gmail.com",
          username: "jorgelopez",
          password: "1234"
        };
        const response = await request.post('/client').send(newClient);
        expect(response.status).toBe(200);
        expect(response.body.state).toBe(true);
       
     });
    it('debería encontrar un cliente por nombre de usuario', async () => {
       const username = 'jorge'; 
       const response = await request.get(`/client/username/${username}`);
       expect(response.status).toBe(200);
       expect(response.body.state).toBe(true);
       
    });
   
    it('debería eliminar un cliente por ID', async () => {
       const id = '14'; 
       const response = await request.delete(`/client/${id}`);
       expect(response.status).toBe(200);
       expect(response.body.state).toBe(true);
      
    });
   });