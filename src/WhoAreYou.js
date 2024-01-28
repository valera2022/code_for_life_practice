import React from 'react'
import { useState } from 'react'
import Courses from './Courses'
import { useContext } from 'react'
import { AppContext } from './context/context'

export default function WhoAreYou() {
    const{getUsers,setUserInput,userInput,eventFired } =  useContext(AppContext)



    

    function handleSubmit(e){
        e.preventDefault()
        getUsers()
            
          
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
        {eventFired && <Courses /> }
        </div>
     
        
             

    </div>
  )
}
