import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class GetDirectApi extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         data: [],"getAddress":[],
      }
   };
componentDidMount() {
   var self = this;
axios.get('http://jsonplaceholder.typicode.com/users/1')
 .then(function (response) {
   self.setState({data: response.data})
  self.setState({getAddress: response.data.address})
 })
.catch(function (error) {
   console.log(error);
});
}
   render() {
      return (
         <div >
           <h1 >Get Api Method By axios</h1>
            <h2>USer Deatils</h2>  
          <div>
          <p><label>Name :</label>{this.state.data.name}</p>
          <p><label>User Name :</label>{this.state.data.username}</p>
          <p><label>Email :</label>{this.state.data.email}</p>
          <p><label>Phone :</label>{this.state.data.phone}</p>
          <p><label>Website :</label>{this.state.data.website}</p>
          <p><label>Address :</label><br/>
          <span><b> street: </b>{this.state.getAddress.street} </span><br/>
          <span><b> suite: </b>{this.state.getAddress.suite} </span><br/>
          <span><b>zipcode: </b>{this.state.getAddress.zipcode} </span><br/> 
           </p>
          </div>
          <label>Api Data Link:</label><a href='http://jsonplaceholder.typicode.com/users/1' target='_blank'>Click</a>
         </div>
      );
   }
}

export default GetDirectApi;