import React,{Component} from 'react';
import { render } from 'react-dom';


class ComDropBox extends Component
{
   
    render()
    {
       return(
            <select value={this.props.comDropValue} onChange={this.props.comDropChange} >
                 <option value="">--Select value --</option>
                <option value="Gj">Gujarat</option>
                <option value="MH">MH</option>
                <option value="MP">MP</option>
            </select>
        );
    }
}

export default  ComDropBox;