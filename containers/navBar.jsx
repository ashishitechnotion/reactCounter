import React,{Component} from 'react';
import {render} from'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router-dom';
class NavBar extends Component
{
    render()
    {
    return(
       
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
        <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand">Brand</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
        <li className="active"><Link to="/navbar">Home <span className="sr-only">(current)</span></Link></li>
         <li><Link to="/allcomponent">All Components</Link></li>
         <li><Link to="/login">Login</Link></li>
         <li><Link to="/comButton">Button</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
         <li><Link to="/incdec">IncreMent/Decrement</Link></li>
         <li><Link to="/dgetApi">Get Api Method</Link></li>
         <li><Link to="/dpostApi">Post Api Method</Link></li>
        </ul>
        </div>
        </div>
         {this.props.children}
        </nav>
       
        
        );
    }
}
export default NavBar;