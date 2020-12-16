import React,{Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import AssetsList from './AssetList';
import AddAsset from './AddAsset';
import Viewrequest from './Viewrequest';
import Login from './Login';
import Display from './Display'
import Pendinglist from './Pendinglist'
import Rejected from './Rejected'
import Editrequest from './Editrequest'
import EditAsset from './EditAsset'
import ViewProfile from './Viewprofile'
import { render } from '@testing-library/react';

export default class Admin extends Component {

  componentDidMount(){

    document.getElementById('login').style.display="none";
        document.getElementById('register').style.display="none";
        document.getElementById('logout').style.display="block";
 
}
render()
{
      return(
        <Router>
        <div>
            <div>
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <Link to={'/AssetList'} class="nav-link active" >View Assets</Link>
  </li>
  <li class="nav-item">
    <Link to={'/AddAsset'} class="nav-link" >Add Assets</Link>
  </li>
  <li class="nav-item">
  <Link to={'/Viewrequest'} class="nav-link" >All Requests</Link>
  </li>
  <li class="nav-item">
    <Link to={'/Display'} class="nav-link " href="#">Approved</Link>
  </li>
  <li class="nav-item">
    <Link to={'/Pendinglist'} class="nav-link " href="#">Pending</Link>
  </li>
  <li class="nav-item">
    <Link to={'/Rejected'} class="nav-link " href="#">Rejected</Link>
  </li>
  {/* <li class="nav-item ">
    <Link to={'/App'} class="nav-link " href="#">Logout</Link>
  </li> */}
</ul>
        </div></div>
        <switch>

    <Route path='/AddAsset' component={AddAsset}/>
    <Route path='/Viewrequest' component={Viewrequest}/>
    <Route path='/AssetList' component={AssetsList}/>
    <Route path='/Login' component={Login}/>
    <Route path='/Editrequest/:id' component={Editrequest}/> 
    <Route path='/EditAsset/:id' component={EditAsset}/>  
    <Route path='/Display' component={Display}/>
    <Route path='/Pendinglist' component={Pendinglist}/>
    <Route path='/Rejected' component={Rejected}/>
   
    </switch>
        </Router>
    )
}

}
