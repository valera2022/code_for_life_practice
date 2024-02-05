import React, { useEffect ,useState} from 'react'
import Course from './Course'
import { useContext } from 'react'
import { AppContext } from './context/context'

export default function Courses({}) {
    //find user
    
    //add conditional statements to display based on input value(display course + what's needed in different situations)
    const{users,userInput}= useContext(AppContext)
    const[courses,setCourses] = useState([])

    let user = users.find(u=>u.name === userInput)
    console.log(user)

    console.log(userInput)
    console.log(courses)
   

    useEffect(()=>{
        fetch("http://localhost:4000/courses")
        .then(res=> res.json())
        .then(data=> setCourses(data) )
    },[])

    if(user){
       return (
        <div className='container'>
         <h1>Welcome {user.name}</h1>
        {courses.map(c=><Course course={c}/>)}
        </div>
       )
    }
    else if(user === undefined){
       return <h1>User was found</h1>

    }
  

}
