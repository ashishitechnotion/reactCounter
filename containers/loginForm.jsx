import React,{Component} from 'react';
import {render} from 'react-dom';
import ConButton from './comButton.jsx';
import InputText from './comInputText.jsx';
import {Router,HashRouter,Route,browserHistory} from 'react-router-dom';

class LoginFrom extends Component
{
    constructor(props)
    {
       super(props);
       this.state=
       {
           inputText:"email",
           inputPass:"password",
           textLength:"45",
           passLength:"20",
           isRequired:true,
           btnSubmit:"submit",
           btnName:"Login"
        }
    }
    render()
    {
        return(
            <form name="loginfrom" method="POST">
            <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">

            <div className="form-group">
            <label>Email:</label>
            <InputText inputType={this.state.inputText}  inputLength={this.state.textLength}   className="form-control" inputRequired={this.state.isRequired}></InputText>
            </div>

            <div className="form-group">
            <label>Password:</label>
            <InputText inputType={this.state.inputPass} inputLength={this.state.passLength} inputRequired={this.state.isRequired} ></InputText>
            </div>

            <div className="text-center">
            <ConButton btnType={this.state.btnSubmit} myconvalue={this.state.btnName}></ConButton>
            </div>

            </div>
            <div className="col-md-2"></div>
            </div>
            </form>
        );
    }
}
export default LoginFrom;