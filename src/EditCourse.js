import React from 'react'
import { useRef } from 'react'
import { useState } from 'react';

export default function EditCourse({cl: course}) {
    //useRef to transformed this form into a modal
    const [title,setTitle] = useState(course.title)
    const [image,setImage] = useState(course.image)
    const [description,setDescription] = useState(course.description)


    

    function handleSubmit(){

    }
  return (
    <>

   
        <form onSubmit={handleSubmit} >
            <div>

             <div>
                <h1>Edit Course</h1>
                <br></br>
                <lable>Title</lable>
                <input value={title} onChange={(t)=>setTitle(t.target.value)} type="text"/>
                
             </div>
             
             <br></br>

               <div>
            
                <lable>image</lable>
                <input value={image} onChange={(t)=>setImage(t.target.value)} type="url"/>
                
              </div>
         
              <br></br>

               <div>
            
                <lable>description</lable>
                <input value={description} onChange={(t)=>setDescription(t.target.value)} type="text"/>
                


              </div>
              <div>
                <button  type="submit"     >Submit</button>
              </div>
             
            </div>

        </form>


   
    </>
 
  )
}
