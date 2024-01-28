import React from "react";
import { useContext } from "react";
import { AppContext } from "./context/context";

export default function usePersonal(){
    const {userInput,users} = useContext(AppContext)

    // const rightUser = ()=>{
        let user = users.find(user=>user.name === userInput)
    //     return user
         
    // }

    const isTeacher= ()=> {
        // console.log(rightUser)
        if(user.roll === "Teacher"){
            return true
        }
        else{
            return false
        }
    }
    const isStudent= ()=>{
        if(user.roll === "Student"){
            return true
        }
        else{
            return false
        }
    }
    return {isTeacher,isStudent}
}

