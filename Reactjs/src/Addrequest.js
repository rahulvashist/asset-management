
import axios from 'axios';  
import React, { useState, useEffect } from 'react'  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import Viewrequest from './Viewrequest';
import Login from './Login';
import Dashboard from './Dashboard';

function AddAsset(props) {  
  
  const [data, setdata] = useState({ AssetName: '', Quantity: '', EmployeID: '', Status:'',MgrID:''})  
  const apiUrl = "https://localhost:44371/api/AssetRequest/InsertAsset";  
  const Registration = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = { AssetName: data.AssetName, Quantity: data.Quantity, EmployeID: data.EmployeID, Status: data.Status, MgrID:data.MgrID };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')
        {
            alert('Not inserted');
        }
        else  
        {
            alert('Asset Request sent');
            props.history.push('/Dashboard') 
           
        }
           
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (  
   
      <Router>

       
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
                  <h1 class="h4 text-gray-900 mb-4">Request Asset</h1>  
                </div>  
                <form onSubmit={Registration} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="AssetName" onChange={onChange} value={data.AssetName} class="form-control" id="exampleFirstName" placeholder=" Asset Name" required/>  
                    </div>  
                    <div class="col-sm-6">  
                      <input type="text" name="Quantity" onChange={onChange} value={data.Quantity} class="form-control" id="exampleLastName" placeholder="Quantity" required/>  
                    </div>  
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="EmployeID" onChange={onChange} value={data.EmployeID} class="form-control" id="exampleInputEmail" placeholder="Employe ID" required/>  
                  </div>  
                  {/* <div class="form-group">  
                    <input type="text" name="Status" onChange={onChange} value={data.Status} class="form-control" id="exampleInputEmail" placeholder="Status" />  
                  </div>   */}
                  <div class="form-group">  
                    <input type="text" name="MgrID" onChange={onChange} value={data.MgrID} class="form-control" id="exampleInputEmail" placeholder="ManagerID" required/>  
                  </div>
                  <div class="form-group row">  
                    {/* <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Address" onChange={onChange} value={data.Address} class="form-control" id="exampleInputPassword" placeholder="Address" />  
                    </div>   */}
                    {/* <div class="col-sm-6">  
                      <input type="text" name="Department" onChange={onChange} value={data.Department} class="form-control" id="exampleRepeatPassword" placeholder="Department" />  
                    </div>   */}
                  </div>  
                  <button type="submit" class="btn btn-primary  btn-block">  
                    Request  
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
    <switch>
    <Route path='/Dashboard' component={Dashboard}/>
    </switch>
    </Router>
  )  
}  
  
export default AddAsset