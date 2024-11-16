import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n'; 

// Criação do root utilizando o React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizando o App dentro do StrictMode para facilitar a depuração
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se quiser começar a medir o desempenho do seu app, passe uma função para logar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um endpoint de análise. Mais informações: https://bit.ly/CRA-vitals
reportWebVitals();
