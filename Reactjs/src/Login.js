import React, { useState, useEffect } from 'react'   
import axios from 'axios';  
import {useForm} from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import Register from './Register'; 
function Login(props) {  
    const [managers, setmanager] = useState({ ManagerName: '', Password: ''});  
    const apiUrl = "https://localhost:44371/api/manager/Login";    
    const Login = (e) => {    
          //  e.preventDefault();    
            debugger;   
            const data = { ManagerName:managers.ManagerName, Password: managers.Password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                debugger;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
               var a= localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                const user =result.data.UserDetails;  
                console.log(result.data.message);
                if(data.ManagerName=="admin" && data.Password=="admin"){
                    alert("Admin Panel"); 
                        props.history.push('/Admin')
                }  
               else if (result.data.status == '200')
                    {
                        alert("valid user"); 
                        props.history.push('/Dashboard/'+user.ManagerID) 
                     }     
                else    
                alert('Invalid User');    
            })        
          };    
          
          const onChange = (e) => {    
                e.persist();    
                debugger;    
                setmanager({...managers, [e.target.name]: e.target.value});    
              } 
              const { register, handleSubmit, errors}= useForm();   
    return (  
        <Router>
      <div className="container">
      <form class="text-center border border-light p-5" onSubmit={handleSubmit(Login)}>
      
          <p class="h4 mb-4">Sign in</p>
      
          
          <input type="text" id="defaultLoginFormEmail" class="form-control mb-4" value={managers.ManagerName} onChange={ onChange }  name="ManagerName" placeholder="Manager Name" required/>
      
         
          <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" value={managers.Password} onChange={ onChange }  name="Password" placeholder="Password" required/>
      
          <div class="d-flex justify-content-around">
              <div>
                
                  <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"/>
                      <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                  </div>
              </div>
              <div>
                 
                  <a href="">Forgot password?</a>
              </div>
          </div>
      
         
          <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>
      
         
          {/* <p>Not a member?
              <Link  to={'/Register'}>Register</Link>
          </p> */}
      
         
          {/* <p>or sign in with:</p>
      
          <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
          <a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
          <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
          <a href="#" class="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a> */}
      
      </form>
      </div>
      <Switch>
   
      <Route path='/Register' component={Register} /> 
      </Switch>
      </Router>
    )  
}  
  
export default Login