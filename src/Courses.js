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
  

}
