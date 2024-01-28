import React from 'react';
import './App.css';



export default function Course({course}) {
  return (
    
    <div class="div-1">
        <h3 id="title">{course.title}</h3>
        <img src={course.image}  width="200" height="200"/>
        <p>{course.description}</p>
    </div>
  )
}
