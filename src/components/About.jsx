import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function About() {

    const [color , setColor] = useState("White");

    //Getting the prop passed from Home page (via navigate() function)
    const location = useLocation(); //Get the current location object

    //Why using useEffect() ? - Because if you update state (setColor) directly in component body and-
    //1. they are executed unconditionally , OR
    //2. the state is updated based on a condition which is always TRUE (or present)
    //3. the state is updated based on a condition which never changes
    //In any above cases the component will keep on re-rendering infinitely if useEffect() with dependency array is not used
    useEffect(() => {  

        // Check if state exists and contains backgroundColor
        if(location.state && location.state.BGcolor){

            setColor(location.state.BGcolor);  
        }
    } ,[location.state])

    

    return(
        <div className="min-h-screen flex items-center justify-center p-4 font-sans" style={{backgroundColor: color}}>
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
                This project is to test my React dev skills
            </h2>
        </div>
    )
}
