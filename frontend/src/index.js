import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Cliente from './componentes/Cliente';
import NotFound from './componentes/NotFound';

const Root = () => {
    return (
        <Router basename="/app">
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/cliente" component={Cliente} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

render(<Root/>, document.querySelector('#main'));




