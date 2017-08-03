import React,{Component} from 'react';
import {render} from 'react-dom';

class ComCheckBox extends Component
{

    render()
    {
        return(
            <label>
            <input type='checkbox' value={this.props.comCheckValue} onClick={this.props.comCheckClick}/> Checkbox
            </label>
        );
    }
} 
export default ComCheckBox;