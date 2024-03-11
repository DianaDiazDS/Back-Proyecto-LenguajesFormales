
const supertest = require('supertest');
 const app = require('../testServer.js');  
 const request = supertest(app);


 describe('Transacciones CRUD', () => {
   it('debería guardar una nueva transacción', async () => {
      const newTransaction = {
        
         id: 25,
         amount: 4439,
         status: "pago",
         entityname: "medico10",
         paymentDate: "2024/12/20",
         endDate: "2024/12/29",
         category: "prueba",
         client: {
           _id: "65ee3dfd18db502b8a51860e" 
         }
        
      };
      const response = await request.post('/transaction').send(newTransaction);
      expect(response.status).toBe(200);
      expect(response.body.state).toBe(true);
      
   });
  
   it('debería encontrar una transacción por ID', async () => {
      const id = '1'; 
      const response = await request.get(`/transaction/${id}`);
      expect(response.status).toBe(200);
      expect(response.body.state).toBe(true);
      
   });
  
   it('debería actualizar una transacción por ID', async () => {
      const id = '24'; 
      const updateInformation = {        
        status: 'no pago',
      };
      const response = await request.patch(`/transaction/${id}`).send(updateInformation);
      expect(response.status).toBe(200);
      expect(response.body.state).toBe(true);
      
   });
  
   it('debería eliminar una transacción por ID', async () => {
      const id = '25'; 
      const response = await request.delete(`/transaction/${id}`);
      expect(response.status).toBe(200);
      expect(response.body.state).toBe(true);
     
   });
  });
