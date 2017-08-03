import React,{Component} from 'react';
import {render} from 'react-dom';


class ComRadioButton extends Component
{
    render()
    {
        return(
            <label>
    <input type='radio' value={this.props.comRadioValue} onClick={this.props.comradioClick}/>Radio
    </label>
        );
    }
}
export default ComRadioButton;