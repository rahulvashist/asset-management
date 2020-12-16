import React, { useState } from 'react'  
import axios from 'axios';  
function AddAsset(props) {  
  const [data, setdata] = useState({ AssetName: '', Quantity: '', Price: '', Total_Price: ''})  
  const apiUrl = "https://localhost:44371/api/Assets/InsertAsset";  
  const Registration = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = { AssetName: data.AssetName, Quantity: data.Quantity, Price: data.Price, Total_Price: data.Total_Price };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')
        {
            alert('Invalid asset');
        }
        else  
        {
            alert('Asset Added');
            props.history.push('/AssetList') 
        }
           
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
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
                  <h1 class="h4 text-gray-900 mb-4">Add an Asset</h1>  
                </div>  
                <form onSubmit={Registration} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="AssetName" onChange={onChange} value={data.AssetName} class="form-control" id="exampleFirstName" placeholder=" Asset Name" />  
                    </div>  
                    <div class="col-sm-6">  
                      <input type="text" name="Quantity" onChange={onChange} value={data.Quantity} class="form-control" id="exampleLastName" placeholder="Quantity" />  
                    </div>  
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="Price" onChange={onChange} value={data.Price} class="form-control" id="exampleInputEmail" placeholder="Price" />  
                  </div>  
                  {/* <div class="form-group">  
                    <input type="text" name="Total_Price" onChange={onChange} value={data.Total_Price} class="form-control" id="exampleInputEmail" placeholder="Total" />  
                  </div>   */}
                  <div class="form-group row">  
                    {/* <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Address" onChange={onChange} value={data.Address} class="form-control" id="exampleInputPassword" placeholder="Address" />  
                    </div>   */}
                    {/* <div class="col-sm-6">  
                      <input type="text" name="Department" onChange={onChange} value={data.Department} class="form-control" id="exampleRepeatPassword" placeholder="Department" />  
                    </div>   */}
                  </div>  
                  <button type="submit" class="btn btn-primary  btn-block">  
                    Add  
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
  
export default AddAsset