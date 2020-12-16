import React, { useState, useEffect } from 'react'  
import Addrequest from './Addrequest';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
import Viewstatus from './Viewstatus';
import ViewProfile from './Viewprofile';
  
function Dashboard() {  
    const [user, setuser] = useState({ ManagerName: '', Password: '' });  
    useEffect(() => {  
        var a = localStorage.getItem('myData');  
        var b = JSON.parse(a);  
        console.log(b.ManagerName);  
        setuser(b)  
        console.log(user.ManagerID)  

        document.getElementById('login').style.display="none";
        document.getElementById('register').style.display="none";
        document.getElementById('logout').style.display="block";
  
    }, []);  
    return (  
      
            <Router>
        <>  
           
            <center><h3>Welcome {user.ManagerName}</h3>  </center>
            {/* <li className="nav-item">      
                <Link to={'/Addrequest'} className="nav-link">Addrequest</Link>      
              </li>     */}
               <div>
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <Link to={'/Addrequest/'+user.ManagerID} class="nav-link active" >Request Asset</Link>
  </li>

  <li class="nav-item">
    <Link to={'/Viewprofile/'+user.ManagerID} class="nav-link active" >My profile</Link>
  </li>

  <li class="nav-item">
    <Link to={'/Viewstatus/'+user.ManagerID} class="nav-link active" >Request Status</Link>
  </li> 
      </ul>
      </div>    
        </>  
        <Switch>
        <Route path='/Addrequest/:id' component={Addrequest}/>
        <Route path='/Viewstatus/:id' component={Viewstatus}/> 
        <Route path='/Viewprofile/:id' component={ViewProfile}/> 
        </Switch>
        </Router>
    )  
}  


  
export default Dashboard