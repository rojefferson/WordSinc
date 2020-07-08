import React from 'react';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';

// import { isAuthenticated } from "./Services/auth";
import Login from './Pages/Login'
import Home from './Pages/Home';
import CreateVenda from "./Pages/CreateVenda"


import { isAuthenticated } from './Services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <PrivateRoute path="/Home" exact component={Home} />
                <PrivateRoute path="/venda/:id" exact component={CreateVenda} />
                <PrivateRoute path="/venda" exact component={CreateVenda} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;