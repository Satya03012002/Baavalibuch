 import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import validator from 'validator'

function Page1() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        text:""
      });
    
      const validateEmail = (email) => {
        if (validator.isEmail(email)) {
            console.log("true")
            return true
          } else {
            return false
          }
    
      }
   
    const handleUser = (e) =>{
      const { name, value } = e.target;
      setValues({...values, [name]:value})
    
    }
    
    const sendRequest= async()=>{
      try{
        const res = await axios.post(`http://localhost:5000/signin`, values)
        
        const data = await res.data;
        return data;
    
      }catch(err){
        alert(err)
      }
    
    }
    
    
    const handleSubmit = async(e)=>{
      e.preventDefault();
      if(validateEmail(values.email)){
        console.log("emailformat checked")
        
      }else{
        alert("invalid email")
        return
      }
      
      try{
      const data = await sendRequest();
      console.log("userId", data.data._id);
      if(data){
        console.log("data -->" ,data)
        await localStorage.setItem("userId", data.data._id)
        navigate("/data")
      }else{
        alert("invalid input")
      }
    
    
      }catch(err){
        alert("invalid details")
      }
    }
    
      return (
        <>
          <Card style={{ width: '18rem', margin:'auto' }}>
    
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
        
        </>
      );
}

export default Page1