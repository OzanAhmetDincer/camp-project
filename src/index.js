import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import "react-toastify/dist/ReactToastify.min.css"
import { configureStore } from './store/configureStore';


const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // komponentler içerisinde props ile yönlendirme(route) işlemi yapabiliyoruz fakat farklı komponentler arasında bu işlemi yapabilmek için "react-router-dom" paketini yüklememiz gerek ve sonrasında ana component de bunun uygulanması için aşağıdaki gibi "BrowserRouter" içerisine almamız gerek. Uygulamamızı Redux alt yapısı ile kullanabilmek için "Provider" kullanırız.
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter> 
    </Provider>
);
reportWebVitals();
