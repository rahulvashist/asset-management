import React from 'react'  
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import Editrequest from './Editrequest'

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  

import axios from 'axios';  

import { useState, useEffect } from 'react'  



function Viewstatus(props) {  

  const [data, setData] = useState([]);  

  

  useEffect(() => {  

    const GetData = async () => {  

      const result = await axios('https://localhost:44371/api/AssetRequest/AssetRequestDetails');  

      setData(result.data);  

    };  

  

    GetData();  

  }, []);  

  const deleteasset = (ID) => {  

    debugger;  

    axios.delete('https://localhost:44371/api/AssetRequest/DeleteRequest?id=' + ID)  

      .then((result) => {  

        props.history.push('/Viewrequest')  

      });  

  };  



  const editasset1 = (id) => {  

    props.history.push({  

      pathname: '/Editrequest/' + id  

    });  

  };  

  

  return (  
    <Router>

    <div className="animated fadeIn">  

      <Row>  

        <Col>  

          <Card>  

            <CardHeader>  

              <i className="fa fa-align-justify"></i> Request List  

              </CardHeader>  

            <CardBody>  

              <Table hover bordered striped responsive size="sm">  

                <thead>  

                  <tr>  

                    <th>RequestID</th>  

                    <th>AssetName</th>  

                    <th>Quantity</th>  

                    <th>EmployeID</th>  

                    <th>Status</th>  

                    {/* <th>Manager ID</th> */}

                  

                  </tr>  

                </thead>  

                <tbody>  

                  {  

                    data.map((item, idx) => {  
                            // if(item.MgrID==data.id){
                      return <tr>  

                        <td>{item.RequestID}</td>  

                        <td>{item.AssetName}</td>  

                        <td>{item.Quantity}</td>  
                        <td>{item.EmployeID}</td>  

                        <td>{item.Status}</td>  
                        {/* <td>{item.MgrID}</td>   */}

                        

                        <td>  

                          <div class="btn-group">  

                            {/* <button className="btn btn-warning" onClick={() => { editasset1(item.RequestID) }}>Approve</button>  

                            <button className="btn btn-warning" onClick={() => { deleteasset(item.RequestID) }}>Delete</button>   */}
                          </div>  
                        </td>  
                      </tr>  
                    })}  
                </tbody>  
              </Table>  
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div>  
    {/* <Switch><Route path='/Editrequest/:id' component={Editrequest}/> </Switch> */}
    </Router>
  )  

}  

export default Viewstatus