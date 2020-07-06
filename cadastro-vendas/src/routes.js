import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Home from './Pages/Home';
import CreateVenda from "./Pages/CreateVenda"

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/venda/:id" exact component={CreateVenda} />
                <Route path="/venda" exact component={CreateVenda} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;