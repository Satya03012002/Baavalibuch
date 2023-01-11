import React ,{useEffect,useState}from 'react'
import axios from "axios"
import Card from 'react-bootstrap/Card';

function Page2() {

    // const[userData, setuserData] = useState({
    //     email:"",
    //     text:""
    // })
    
    const[userData, setuserData] = useState({})
    const id =  localStorage.getItem("userId")
    const sendRequest= async()=>{
        try{
            
            
            console.log("id", id)

          const res = await axios.get(`http://localhost:5000/signin/${id}`);
          
          const data = await res.data;
         
          
          return data;
      
        }catch(err){
          alert(err)
        }
      
      }
  

     
    useEffect (()=>{
        const subscribe = ()=>{
            
                sendRequest().then((data)=>setuserData(data))
                // console.log("data--->", data);
                //  setuserData([...data])
                console.log("userData", userData)
           
          
        }
        return subscribe();
        
     
     

    },[id])
  return (
      <>
          <Card style={{ width: '18rem', margin:'auto' }}>
              <Card.Header> <Card.Title>{`   ${userData.email}`}</Card.Title></Card.Header>
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