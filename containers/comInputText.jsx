import React,{Component} from 'react';
import {render} from 'react-dom';

class InputText extends Component
{
    render()
    {
 
        return(
            <input type={this.props.inputType} className="form-control" onBlur={this.props.txtBulrEvent}  onChange={this.props.txtOnChangeEvent} value={this.props.ComTextValue} maxLength={this.props.inputLength} required={this.props.inputRequired}/>
        );
    }
} 
InputText.defaultProps=
{
    inputType:"text",
    inputLength:"30",
    inputRequired:false
}
export default InputText;