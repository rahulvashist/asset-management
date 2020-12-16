import React, { useState } from 'react'  
import axios from 'axios';  
import {useForm} from 'react-hook-form';

function Register(props) {  
  const [data, setdata] = useState({ ManagerName: '', Password: '', Mobile: '', Address: '' })  
  const apiUrl = "https://localhost:44371/api/manager/Register";  
  const Registration = (e) => {  
   // e.preventDefault();  
    debugger;  
    const data1 = { ManagerName: data.ManagerName, Password: data.Password, Mobile: data.Mobile, Address: data.Address };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
          props.history.push('/Login')  
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  const { register, handleSubmit, errors}= useForm();

  return (  
    <div class="container">  
      <div class="row">  
        {/* <div class="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
          Add New Contact  
       </div>   */}
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4">Create a New User</h1>  
                </div>  
                <form onSubmit={handleSubmit(Registration)} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="ManagerName" onChange={onChange} value={data.ManagerName} class="form-control" id="exampleFirstName" placeholder="Name" 
                      ref={register({required:true,pattern:/^[a-zA-Z]+$/i ,maxLength: 20,minLength: 4})}/>  
                      <div style={{color:"red"}}>
                        {errors.ManagerName && errors.ManagerName.type==="required" && (<p>Name is required </p>)}
                        {errors.ManagerName && errors.ManagerName.type==="minlength" && (<p>Enter more than 4 char </p>)}
                        {errors.ManagerName && errors.ManagerName.type==="maxlength" && (<p>4-20 chars only </p>)}
                        {errors.ManagerName && errors.ManagerName.type==="pattern" && (<p>Enter chars only </p>)}

                      </div>
                    </div>  
                    <div class="col-sm-6">  
                      <input type="Password" name="Password" onChange={onChange} value={data.Password} class="form-control" id="exampleLastName" placeholder="Password" 
                      ref={register({required:true,pattern:/^[a-zA-Z]+$/i ,maxLength: 20,minLength: 4})}/>  
                      <div style={{color:"red"}}>
                        {errors.Password && errors.Password.type==="required" && (<p>Password is required </p>)}
                        {/* {errors.ManagerName && errors.Password.type==="minlength" && (<p>Enter more than 4 char </p>)}
                        {errors.Password && errors.Password.type==="maxlength" && (<p>4-20 chars only </p>)} */}
                        {errors.Password && errors.Password.type==="pattern" && (<p>Enter chars only </p>)}

                      </div> 
                    </div>  
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="Mobile" onChange={onChange} value={data.Mobile} class="form-control" id="exampleInputEmail" placeholder="Mobile" />  
                  </div>  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Address" onChange={onChange} value={data.Address} class="form-control" id="exampleInputPassword" placeholder="Address" />  
                    </div>  
                   
                  </div>  
                  <button type="submit" class="btn btn-primary  btn-block">  
                    Create   
                    </button>  
                  <hr />  
                </form>  
                <hr />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Register  