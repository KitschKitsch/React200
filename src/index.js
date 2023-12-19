import React from 'react';
import ReactDOM from 'react-dom/client'; // v.17 이상부터는 /client 붙여쓰기 + v.18 부터는 createRoot로 렌더 돌리기
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './Components/App';
//import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
);

//serviceWorker.unregister();