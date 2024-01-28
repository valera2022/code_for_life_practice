import React from 'react'
import { useState } from 'react'
import Courses from './Courses'

export default function WhoAreYou() {
    const [userInput,setUserInput]= useState("")
    const [users,setUsers] = useState([])
    const [eventFired, setEventFired] = useState(false)
    console.log(userInput)

    

    function handleSubmit(e){
        e.preventDefault()
        e.stopPropagation()

       fetch("http://localhost:4000/users")
        .then(response => response.json())
        .then(data => {setUsers(data)
           
            console.log("fired")
           
            setEventFired(true)
        }

        
        )
      
      
      
            
          
       
    }
  return (
    <div>
        <div>
        <form onSubmit={handleSubmit}>
            <label>Please Insert Name</label>
            <br></br>
            <input value={userInput} onChange={e=> {setUserInput(e.target.value); e.stopPropagation()}} type="text"/>
            <button type="submit">Submit</button>
        </form>
        </div>
        <div>
        {eventFired && <Courses setEvent={setEventFired} inp = {userInput} people = {users}/> }
        </div>
     
        
             

    </div>
  )
}
