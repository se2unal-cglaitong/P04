import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';


import App from './components/App';
import AuthorList from './components/AuthorList';
import AuthorCreation from './components/AuthorCreation';
import PersonList from './components/PersonList';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/' component={App} />
            <Route path='/authorList' component={AuthorList} />
            <Route path='/authorCreation' component={AuthorCreation} />
            <Route path='/personList' component={PersonList} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
