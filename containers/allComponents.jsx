import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router,hashHistory,Route} from 'react-router';
import { Link } from 'react-router';
import ConButton from './comButton.jsx';
import InpuText from './comInputText.jsx';
import ComDropBox from './comDropBox.jsx';
import ComRadioBox from './comRadioButton.jsx';
import ComCheckBox from './comCheckBox.jsx';


class AllComponent extends React.Component 
{
constructor(props)
{
super(props);
this.state={data:"Submit","drpdata":"","rdrdata":"","chkdata":"","txtChangedata":"","txtBulrdata":""}
this.myclick=this.myclick.bind(this);
this.drpclick=this.drpclick.bind(this);
this.rdrclick=this.rdrclick.bind(this);
this.chkclick=this.chkclick.bind(this);
this.txtBulr=this.txtBulr.bind(this);
this.txtChange=this.txtChange.bind(this);

}
//this.myclick=this.myclick.bind(this);
myclick(e)
{
    this.setState({data:"Submitting..."})
    console.log("this is my First Componts");
}
drpclick(e)
{
     console.log("dropDown value:");
    this.setState({drpdata:e.target.value});
   
}
rdrclick(e)
{
    console.log("Radio Button");
    this.setState({rdrdata:"Radio"});
}
chkclick(e)
{
    console.log("CheckBox click");
    this.setState({chkdata:"CheckBox"});
}
txtBulr(e)
{
    console.log("text bulr");
    this.setState({txtBulrdata:"text Bulr"});

}
txtChange(e)
{
      console.log("text change");
    this.setState({txtChangedata:e.target.value});

}

render() {
return (
        <div>
        <h1>HOME.....</h1>
        <h4>Button Component</h4>
        <ConButton myconvalue={this.state.data}  myConButtonClick={this.myclick}></ConButton>

        <h4>Input Text</h4>
        <InpuText ComTextValue={this.state.txtChangedata}  txtOnChangeEvent={this.txtChange}  txtBulrEvent={this.txtBulr}></InpuText>
        <p>Text box Value:{this.state.txtChangedata}</p>

        <h4>DropDown Box</h4>
        <ComDropBox comDropValue={this.state.drpdata} comDropChange={this.drpclick} > </ComDropBox>
        <p> Select DropBox: {this.state.drpdata}</p>

        <h4>Radio Button</h4>
        <ComRadioBox  comRadioValue={this.state.rdrdata} comradioClick={this.rdrclick}>Radio 1</ComRadioBox>
        <p> Select Value: {this.state.rdrdata}</p>

        <h4>CheckBox</h4>
        <ComCheckBox  comCheckValue={this.state.chkdata}  comCheckClick={this.chkclick}></ComCheckBox>
        <p> Select CheckBox: {this.state.chkdata}</p>
        
        </div>


       );
   }
}

export default AllComponent;