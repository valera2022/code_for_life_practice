import React, { useEffect ,useState} from 'react'
import Course from './Course'
import { useContext } from 'react'
import { AppContext } from './context/context'

export default function Courses({}) {
    const{users,userInput}= useContext(AppContext)
    const[courses,setCourses] = useState([])
    let user = users.find(u=> u.name === userInput)
    console.log(userInput)
    console.log(user)

    useEffect(()=>{
        fetch("http://localhost:4000/courses")
        .then(res=> res.json())
        .then(data=> setCourses(data) )
    },[])
    if(user){
        return(
        <div class="container">
            <h1 id="welcome">Welcome {userInput}</h1>
            {courses.map(course=><Course usuario={user} course={course}/>)}
        </div>
        )
        
    }
    else if(userInput === ""){
       return <h1>need to insert a name</h1>
    }
    else if( userInput !== user ){
       return ( <h1>Sorry you are not a Student here</h1>)
    }
    else{
        return null
    }
  
//   return (
    
//     <div>Courses</div>
//   )
}
