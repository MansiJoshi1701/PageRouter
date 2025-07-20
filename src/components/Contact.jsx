import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {

    const [color , setColor] = useState("White");

    const location = useLocation();

    useEffect(() => {

        if(location.state && location.state.BGcolor){
        
            setColor(location.state.BGcolor);
        }

    } , [location.state]);
    

    return(
        <div className="min-h-screen flex items-center justify-center p-4 font-sans" style={{backgroundColor: color}}>
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
                Sorry! Contact details are hidden
            </h2>
        </div>
    )
}