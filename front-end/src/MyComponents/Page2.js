import React ,{useEffect,useState}from 'react'
import axios from "axios"
import Card from 'react-bootstrap/Card';

function Page2() {

    const[userData, setuserData] = useState({})

    const sendRequest= async()=>{
        try{
            const id =  localStorage.getItem("userId")
          const res = await axios.get(`http://localhost:5000/signin/${id}`);
          console.log("res", res);
          const data = await res.data;
          return data;
      
        }catch(err){
          alert(err)
        }
      
      }

    useEffect (()=>{
        sendRequest.then((data) => setuserData(data)).catch((err)=>alert(err))
     

    },[])
  return (
      <>
          <Card>
              <Card.Header> <Card.Title>{` Hello  ${userData.email}`}</Card.Title></Card.Header>
              <Card.Body>

                  <Card.Text>
                  {userData.text}
                  </Card.Text>
              </Card.Body>
          </Card>
      </>
  )
}

export default Page2