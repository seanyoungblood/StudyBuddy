import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import "../css/LoginRegisterGroupPage.css"
import logo from "../images/UCF_Logo_Clean_Horizontal_Alt.jpg"  


function Register()
{
    let registerFirstName;
    let registerLastName;
    let registerUsername;
    let registerPassword;

    const [message,setMessage] = useState('');

    const doRegister = async event => 
    {

        const app_name = 'cop-study-buddy-1000'
        function buildPath(route){
            if (process.env.NODE_ENV === 'production')
            {
                return 'https://' + app_name +  '.herokuapp.com/' + route;
            }
            else
            {
                return 'http://localhost:5000/' + route;
            }
        }

        event.preventDefault();

        var obj = {firstName:registerFirstName.value, lastName:registerLastName.value, username:registerUsername.value, password:registerPassword.value};
        var js = JSON.stringify(obj);
        console.log(obj);

        try
        {    
            const response = await fetch(buildPath('api/register'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            // if( res.id <= 0 )
            // {
            //     setMessage('User/Password combination incorrect');
            // }
            // else
            // {
            //     var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
            //     localStorage.setItem('user_data', JSON.stringify(user));

            //     setMessage('');
            //     window.location.href = '/cards';
            // }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    
     };


     
    const navigate = useNavigate();

    const handleLogoClick = (e) => {
      e.preventDefault();

      navigate("/");



    }

    const handleLoginClick = (e) =>{
        e.preventDefault();

        navigate("/login");
    }


    return(
        <div id="loginDiv">
            <a className='hover' onClick={(e) => {handleLogoClick(e)}} > <img className='logo' src={logo} alt="" /></a>
        
          <form onSubmit={doRegister}>
          <input className="mt-2 input-field" type="text" id="registerFirstName" placeholder="First Name" ref={(c) => registerFirstName = c} /><br />
          <input className="mt-3 input-field" type="text" id="registerLastName" placeholder="Last Name" ref={(c) => registerLastName = c} /><br />
          <input className="mt-3 input-field" type="text" id="registerUsername" placeholder="Username" ref={(c) => registerUsername = c} /><br />
          <input className="mt-3 input-field" type="password" id="registerPassword" placeholder="Password" ref={(c) => registerPassword = c} /><br />
          <input className="mt-4 variant1-btn" type="submit" id="registerButton"  value = "Register" onClick={doRegister} />
          </form>
          <button className="mt-2 variant2-btn" onClick={(e) => {handleLoginClick(e)}}>Have an account? Login</button>
          <span className="mt-2" id="registerResult">{message}</span>

       </div>
      );
};

export default Register;