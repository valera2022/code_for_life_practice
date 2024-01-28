import React from 'react';
import './App.css';
import { useContext } from 'react';
import { AppContext } from './context/context';
import EditCourse from './EditCourse';
import usePersonal from './My_hook'



export default function Course({course,usuario}) {
  // add logic to display editCourse component base on user roll
 //abstract logic by creating a custom hook

  return (
    
    <div class="div-1">
        <h3 id="title">{course.title}</h3>
        <img src={course.image}  width="200" height="200"/>
        <p>{course.description}</p>
        <div>
         {<EditCourse cl={course}/> : null}
       
        </div>
    </div>
  )
}
