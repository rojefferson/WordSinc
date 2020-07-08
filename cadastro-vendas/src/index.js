import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes"

import { Nav, NavItem, NavLink ,Button } from 'reactstrap';


ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
