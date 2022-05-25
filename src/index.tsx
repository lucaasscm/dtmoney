import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salário',
          amount: 5000,
          type: 'deposit',
          category: 'Trabalho',
          createdAt: new Date('2022-02-01 09:00:32')
        },
        {
          id: 2,
          title: 'Seguro',
          amount: 200,
          type: 'withdraw',
          category: 'Carro',
          createdAt: new Date('2022-12-05 11:20:42')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
