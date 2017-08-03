//Get Api Method By axios

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class PostDirectApi extends React.Component
{
       constructor(props) {
      super(props);
		
      this.state = {
         data: [],"getAddress":[],
      }
   };
    postclick(e)
    {
        axios.post('http://doctix.net/appointment_custom_api.php', {
        firstname: 'test',
        lastname: 'test',
        dob:'06/02/2017',
        gender:'Female',
        email:'test@test.com',
        phone:'1234567890',
        department:'135',
        doctor:'137',
        description:'testing',
        appointmentdate:'06/30/2017',
        appointmenttime:' 03:00 PM',
        appt_status:''
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
    console.log("api click");
    }

    render()
    {
        return(<div>
            <button type="button" onClick={this.postclick}>Post</button>
        </div>);
    }
}
export default PostDirectApi;