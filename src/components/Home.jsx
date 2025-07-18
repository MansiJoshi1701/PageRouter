import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    const [selectedColor , setSelectedColor] = useState('');
    const [selectedPage , setSelectedPage] = useState('');
    const BGcolor = "white";

    //label : is actually what the user sees
    //value : is actually what the code uses
    const pageOptions = [ // pageOptions is an object hence the below syntax
        {label: 'Home' , value: 'Home'}, 
        {label: 'About' , value: 'About'},
        {label: 'Contact' , value: 'Contact'}
    ]

    const colorOptions = [
        {label: 'Red' , value: 'Red'},
        {label: 'Blue' , value: 'Blue'},
        {label: 'Green' , value: 'Green'}
    ]

    const handleSubmit = (event) => {
        //take in 2 argumensts , 'page' and 'color' and change the BG color of the chosen page
        event.preventDefault(); //Prevents default form submission behavior (which causes a page reload)
        
        
        navigate(selectedPage);
    }

   

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans" style={{backgroundColor: BGcolor}}>
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Project Name : Page Router
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Choose Page</label>
                        <select value={selectedPage} onChange={(e) => setSelectedPage(e.target.value)}>
                            <option value="">--Please choose an option--</option>
                            {
                                pageOptions.map((page) => (
                                    <option key={page.value} value={page.value}> {page.label} </option>
                                ))
                            }
                        
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Choose Color</label>
                        <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                            <option value="">--Please select an option--</option>
                            {
                                colorOptions.map((color) => {
                                    return (<option key={color.value} value={color.value}> {color.label} </option>)
                                })
                            }
                        </select>
                    </div>
                    
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out transform hover:scale-105">
                            Submit
                        </button>
                    </div>

                </form>

            </div>
        </div>
        
    )
}