import React from "react";
import { useEffect,useState } from "react";

const AppContext = React.createContext();

function AppProvider({children}){
    const [userInput,setUserInput]= useState("")
    const [users,setUsers] = useState([])
    const [eventFired, setEventFired] = useState(false)

    
     function getUsers(){
        fetch("http://localhost:4000/users")
        .then(response => response.json())
        .then(data => {setUsers(data)
           
            console.log("fired")
           
            setEventFired(true)
            
        }

        
        )

     }
        
   

    

    return (
        <AppContext.Provider value={{ users,getUsers,setUserInput,userInput,eventFired}}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };