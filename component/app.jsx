import React from 'react';
import ReactDOM from 'react-dom';
import {Router,HashRouter,Route,browserHistory} from 'react-router-dom';
import Navbar from '../containers/navBar.jsx';
import Home from '../containers/home.jsx';
import About from '../containers/about.jsx';
import Contact from '../containers/contact.jsx';
import ConButton from '../containers/comButton.jsx';
import AllComponent from '../containers/allComponents.jsx';
import LoginForm from '../containers/loginForm.jsx';
import IncDec from './counter.js';


class App extends React.Component {
   render() {
      return (
     <HashRouter>
    <div>
    <Route  path="/"  component = {Navbar} />
    <Route path = "/login" component = {LoginForm} />
    <Route path = "/about" component = {About} />
    <Route path = "/contact" component = {Contact} />
    <Route path = "/comButton" component = {ConButton} />
    <Route path = "/allcomponent" component = {AllComponent} />
    <Route path = "/incdec" component = {IncDec} />
    
    </div>
</HashRouter>
      )
   }
}

export default App;