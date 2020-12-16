
import './App.css';
import Login from "./Login";  
import Register from "./Register";  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
import Dashboard from "./Dashboard"; 
import Home from "./Home";
import AddAsset from './AddAsset';
import AssetsList from './AssetList';
import EditAsset from './EditAsset';
import How from './How';
import Viewrequest from './Viewrequest';
import Editrequest from './Editrequest';
import ViewProfile from './Viewprofile';
import Admin  from './Admin';
import Lastpage from './Lastpage'

function App() {
  return (
    <Router>      
        
       
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} class="navbar-brand" >Asset Management System</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link to={'/login'} className="nav-link" id="login" style={{display:"block"}}>Login</Link>  
      </li>
      <li class="nav-item active">
      <Link to={'/Register'} className="nav-link" id="register" style={{display:"block"}}>Register</Link> 
      </li>
     {/* <li class="nav-item">
        <Link to={'/How'} class="nav-link" >How it works?</Link>
      </li>
       <li class="nav-item">
      <Link to={'/'} class="nav-link" >About</Link>
      </li>
      <li class="nav-item">
      <Link to={'/'} class="nav-link" >Contact us</Link>
      </li> */}
      <li class="nav-item active">
      <Link to={'/Lastpage'} className="nav-link" id="logout" style={{display:"none"}}>Logout</Link>  
      </li>
    </ul>
  </div>
</nav>
</div>

<Switch>  <Route path='/login' component={Login} />     
          <Route path='/Register' component={Register} />    
          <Route path='/Dashboard' component={Dashboard} />  
          <Route path='/AddAsset' component={AddAsset}/>
          <Route path='/Admin' component={Admin}/>
          <Route path='/AssetList' component={AssetsList}/>
          <Route path='/How' component={How}/>
           <Route path='/Editrequest/:id' component={Editrequest}/> 
           <Route path='/Lastpage' component={Lastpage}/>
          <Route path='/EditAsset/:id' component={EditAsset}/>  
          <Route path='/Viewprofile/:id' component={ViewProfile}/> 
         <Route exact path='/' component={Home}/>
          </Switch>
        
    </Router>     
    
  );
}

export default App;
