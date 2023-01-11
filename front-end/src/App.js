import React from "react";
// import React, {useState} from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Card from 'react-bootstrap/Card';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios"

import Page1 from './MyComponents/Page1';
import {  Route,Routes } from 'react-router-dom';
import Page2 from "./MyComponents/Page2";



function App() {

//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     text:""
//   });

//   const validateEmail = (email) => {
//     const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if(email.match(mailformat)){
//       return true;
//     }
//     else return false;

//   }
// const handleEmail = (e) =>{
  

// }
// const handleUser = (e) =>{
//   const { name, value } = e.target;
//   setValues({...values, [name]:value})

// }

// const sendRequest= async()=>{
//   try{
//     const res = await axios.post(`http://localhost:5000/signin`, values)
//     console.log("res", res);
//     const data = await res.data;
//     return data;

//   }catch(err){
//     alert(err)
//   }

// }


// const handleSubmit = async(e)=>{
//   e.preventDefault();
//   if(validateEmail(e.target.value)){
//     console.log("emailformat checked")
//   }else{
//     alert("invalid email")
//   }
//   console.log(values)
//   try{
//   const data = await sendRequest();
//   console.log(data);
//   localStorage.setItem("userId", data.data._id)

//   }catch(err){
//     alert(err)
//   }
// }

  return (
    <>
    <h1>hello</h1>
      {/* <Card style={{ width: '18rem', margin:'auto' }}>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleUser} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={handleUser} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="confirmPassword" name="confirmPassword" onChange={handleUser}/>
          </Form.Group>
          

            <Card.Text>
            <div class="form-group" style={{padding:"5px"}}>
              <label for="exampleFormControlTextarea1">enter text</label>
              <textarea class="form-control" name="text" rows="3" onChange={handleUser}></textarea>
            </div>
            </Card.Text>

          

          <Button  variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      
     
    </Card>
     */}
     <Routes>
      <Route exact path = "/" element ={<Page1/>} />
      <Route exact path = "/data" element ={<Page2/>} />
     </Routes>
     <Page1/>
    </>
  );
}

export default App;
