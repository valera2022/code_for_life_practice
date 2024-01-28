import React, { useEffect ,useState} from 'react'
import Course from './Course'
import { useContext } from 'react'
import { AppContext } from './context/context'

export default function Courses({}) {
    //find user
    
    //add conditional statements to display based on input value(display course + what's needed in different situations)
    const{users,userInput}= useContext(AppContext)
    const[courses,setCourses] = useState([])

    console.log(userInput)
   

    useEffect(()=>{
        fetch("http://localhost:4000/courses")
        .then(res=> res.json())
        .then(data=> setCourses(data) )
    },[])
  

}
