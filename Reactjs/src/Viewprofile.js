import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function ViewProfile(props) {  
        const [user, setuser]= useState({ManagerID:'', ManagerName: '', Password: '', Mobile: '', Address: ''});
        console.log(props.match.params.id);  
        const Url = "https://localhost:44371/api/manager/ManagerDetailsID?id=" + props.match.params.id;  
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setuser(result.data);  
          };     
          GetData();  
        }, []);  
        const UpdateAsset = (e) => {  
          e.preventDefault();  
          const data = {ManagerID: props.match.params.id, ManagerName: user.ManagerName, Password: user.Password, Mobile: user.Mobile,  Address: user.Address };  
         console.log(data);
          axios.post('https://localhost:44371/api/manager/UpdateRequest', data)  
            .then((result) => {  
                console.log(result.data);
              props.history.push('/Dashboard/'+user.ManagerID)  
            }) 
        }    
        const onChange = (e) => {  
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }  

        return (  
                <div className="app flex-row align-items-center">  
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateAsset}>  
                            <h1>Update Profile</h1>  <br/>
                            <label>Manager ID</label>
                            <InputGroup className="mb-3">  
                                <Input type="text" name="ManagerID" id="ID" placeholder="ID" value={user.ManagerID} onChange={onChange} readOnly />  
                                </InputGroup>
                                <label>Manager Name</label>
                                <InputGroup className="mb-3">  
                                  <Input type="text" name="ManagerName" id="Name" placeholder="Name" value={user.ManagerName} onChange={onChange}  />  
                                </InputGroup>  
                                <label>Password</label>
                                 <InputGroup className="mb-3">  
                                  <Input type="text" placeholder="Password" name="Password" id="Password" value={user.Password} onChange={onChange} />  
                                </InputGroup>
                                <label>Mobile</label>  
                                <InputGroup className="mb-3">  
                                  <Input type="text" placeholder="Mobile" name="Mobile" id="Mobile"  value={user.Mobile}  onChange={onChange} />  
                                </InputGroup> 
                                <label>Address</label>  
                                <InputGroup className="mb-3">  
                                  <Input type="text" placeholder="Email" name="Address" id="Email"  value={user.Address} onChange={onChange}  />  
                                </InputGroup>   
                                                      
                  
                                                           
                      <CardFooter className="p-4">  
                          <Row>  
                          <Col xs="12" sm="6">  
                              <Button type="submit" className="btn btn-info mb-1" ><span>Update</span></Button>  
                            </Col>  
                            <Col xs="12" sm="6">  
                              <Button className="btn btn-info mb-1" ><span>Cancel</span></Button>  
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
  
export default ViewProfile 