import React from 'react'
import { useRef } from 'react'
import { useState } from 'react';

export default function EditCourse({cl: course}) {
    const [title,setTitle] = useState(course.title)
    const [image,setImage] = useState(course.image)
    const [description,setDescription] = useState(course.description)
    const editRef = useRef();

    function openModal(){
        editRef.current.showModal()

    }

    function closeModal(){
        editRef.current.close()

    }

    function handleSubmit(){

    }
  return (
    <>

    <dialog id="dialog" ref={editRef}>
        <form onSubmit={handleSubmit} method="dialog">
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
                <button  type="submit" formmethod="dialog">Submit</button>
              </div>
              <div>
                <button  onClick={closeModal}>cancel</button>
              </div>
            </div>

        </form>


    </dialog>
      <button onClick={openModal}>Edit </button>
    </>
 
  )
}
