import { render } from '@testing-library/react';
import React, { Component } from 'react'

export default class Lastpage extends Component {
    componentDidMount(){
        document.getElementById('login').style.display="block";
            document.getElementById('register').style.display="block";
            document.getElementById('logout').style.display="none";
    }
   

render(){
    return (
        <div class="card mb-3">
        <img class="card-img-top" src="https://www.device42.com/blog/wp-content/uploads/2013/12/asset_management.png" height="600" width="600" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Asset management</h5>
          <p class="card-text">It is important because it helps a company monitor and manage their assets using a systemised approach. Managed effectively, the benefits include improvements to productivity and efficiency which places a business in a better position to increase their return on investment.</p>
          <p class="card-text"><small class="text-muted"></small></p>
        </div>
      </div>
    )
}
}