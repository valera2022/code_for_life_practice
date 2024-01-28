import React, { useEffect ,useState} from 'react'
import Course from './Course'

export default function Courses({people,inp,setEvent}) {
    const[courses,setCourses] = useState([])
    let user = people.find(u=> u.name === inp)
    console.log(inp)
    console.log(user)

    useEffect(()=>{
        fetch("http://localhost:4000/courses")
        .then(res=> res.json())
        .then(data=> setCourses(data) )
    },[])
    if(user){
        return(
        <div class="container">
            <h1 id="welcome">Welcome {inp}</h1>
            {courses.map(course=><Course course={course}/>)}
        </div>
        )
        
    }
    else if(inp === ""){
       return <h1>need to insert a name</h1>
    }
    else if( inp !== user ){
       return ( <h1>Sorry you are not a Student here</h1>)
    }
    else{
        return null
    }
  
//   return (
    
//     <div>Courses</div>
//   )
}
