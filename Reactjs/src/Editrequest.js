import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function EditAsset(props) {  
        const [assets, setasset]= useState({RequestID:'',AssetName: '', Quantity: '', EmployeID: '', Status: '',MgrID:''});  
        const Url = "https://localhost:44371/api/AssetRequest/AssetRequestDetailsID?id=" + props.match.params.id;  
        
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setasset(result.data);  
          };  
        
          GetData();  
        }, []);   
        const UpdateAsset1 = (e) => {  
          e.preventDefault();  
          const data = {RequestID:props.match.params.id, AssetName:assets.AssetName, Quantity: assets.Quantity, EmployeID: assets.EmployeID, Status: assets.Status, MgrID:assets.MgrID };  
          
          axios.post('https://localhost:44371/api/AssetRequest/UpdateRequest', data)  
            .then((result) => {  
              props.history.push('/Viewrequest')  
            });  
        };  
        
        const onChange = (e) => {  
          e.persist();  
          setasset({...assets, [e.target.name]: e.target.value});  
        }  

        



        return (  
                <div className="app flex-row align-items-center">  
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateAsset1}>  
                            <h1>Edit Request</h1>  <br/>
                            <label>Asset Name</label>
                            <InputGroup className="mb-3">  
                              <Input type="text" name="AssetName" id="Name" placeholder="Name" value={assets.AssetName} onChange={ onChange }  readOnly/>  
                            </InputGroup>  
                            <label>Quantity</label>
                             <InputGroup className="mb-3">          
                              <Input type="text" placeholder="Qty" name="Quantity" id="Department" value={assets.Quantity} onChange={ onChange } readOnly/>  
                            </InputGroup>  
                            <label>Employe ID</label>
                            <InputGroup className="mb-3">           
                              <Input type="text" placeholder="empid" name="EmployeID" id="Age"  value={assets.EmployeID} onChange={ onChange }  readOnly/>  
                            </InputGroup>  
                            
                            <InputGroup className="mb-4">  
                            <label>Status</label>
                            <InputGroup className="mb-4">  
                              <select  name="Status" id="City" value={assets.Status} onChange={ onChange } >
                                <option>Pending</option>  
                                <option>Approved</option>  
                                <option>Rejected</option>  
                                </select>
                            </InputGroup>

                            </InputGroup>  
                            <label>Manager ID</label>
                            <InputGroup className="mb-4">  
                              <Input type="text" placeholder="ManagerID" name="MgrID" id="City" value={assets.MgrID} onChange={ onChange }  readOnly/>  
                            </InputGroup>

                            {/* <label>Status</label>
                            <InputGroup className="mb-4">  
                              <Input type="text" placeholder="status" name="Status" id="City" value={assets.Status} onChange={ onChange }  />  
                            </InputGroup>  */}
                             
                      <CardFooter className="p-4">  
                          <Row>  
                            <Col xs="12" sm="6">  
                              <Button type="submit" className="btn btn-info mb-1"  ><span>Update</span></Button>  
                            </Col>  
                            <Col xs="12" sm="6">  
                              <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>  
                            </Col>  
                          </Row>  
                        </CardFooter>  
                          </Form>  
                        </CardBody>                 
                      </Card>  
                    </Col>  
                  </Row>  
                </Container>  
              </div>  
        )  
}  

export default EditAsset