import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <header>
            <nav>
                <div className="flex justify-end space-x-4">
                    
                    <Link
                        to="/" 
                        className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out"
                    >
                            Home
                    </Link>

                    <Link 
                        to="about"
                        className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out"
                    >
                            About
                    </Link>

                    <Link 
                        to="contact"
                        className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out"
                    >
                            Contact
                    </Link>

                </div>
            </nav>
        </header>
    )
}

export default Navbar