import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import "react-toastify/dist/ReactToastify.min.css"
import cfgstore from './store/configureStore';

const store = cfgstore

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // komponentler içerisinde props ile yönlerdirme(route) işlemi yapabiliyoruz fakat farklı komponentler arasında bu işlemi yapabilmek için "react-router-rom" paketini yüklememiz gerek ve sonrasında ana component de bunun uygulanması için aşağıdaki gibi "BrowserRouter" içerisine almamız gerek. Uygulamamızı Redux alt yapısı ile kullanabilmek için "Provider" kullanırız.
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter> 
    </Provider>
);
reportWebVitals();
