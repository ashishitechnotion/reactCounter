import React,{Component} from 'react';
import { render } from 'react-dom';
class ComButton extends Component
{
  render()
  {
    var btnStyle={color:"#fff",
    "backgroundColor":" #FB8C00",
    height:"50px",
    width:"100px"
  };
      return(
                <button type={this.props.btnType} style={btnStyle} onClick={this.props.myConButtonClick} 
                value={this.props.myconvalue}>{this.props.myconvalue}</button>
      );
  }
  
}
ComButton.defaultProps=
{
  myconvalue:"Submit",
  btnType:"button"
}
export default ComButton;