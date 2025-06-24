import React, { useState } from "react";

export default function Home() {

    const [color , setColor] = useState('');
    const [page , setPage] = useState('');

    const handleSubmit = () => {
        //take in 2 argumensts , 'page' and 'color' and change the BG color of the chosen page
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Project Name : Page Router
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Choose Page</label>
                        <input 
                            type="text"
                            placeholder="Home"
                            value={page}
                            onChange={(e) => setPage(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Choose Color</label>
                        <input 
                            type="text"
                            placeholder="White"
                            value={color}
                            onChange={(e) => {setColor(e.target.value)}}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                        />
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