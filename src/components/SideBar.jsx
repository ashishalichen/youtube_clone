import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { contentKeyword } from "../utils/videoContentSlice";

function SideBar() {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    const contentOne = ["Home", "Shorts", "Subscription", "Live"];
    const contentTwo = ["Music", "Sports", "Gaming", "Movies"];

    const dispatch = useDispatch()

    return (
        isMenuOpen && (
            <div className="shadow-lg p-4 w-48 z-10">
                {/* First List */}
                {contentOne.map((item, index) => (
                    <h1
                        key={index}
                        className="font-bold bg-gray-100 hover:bg-gray-200 transform transition duration-300 p-1 m-1 rounded-md cursor-pointer"
                        onClick={() => (item == 'Home' ? dispatch(contentKeyword()) : '')}
                    >
                        <Link to='/'>{item}</Link>
                    </h1>
                ))}

                {/* Subscription List (Repeated Twice) */}
                {[...Array(2)].map((_, i) => (
                    <div key={i}>
                        <h1 className="font-bold bg-gray-100 hover:bg-gray-200 transform transition duration-300 p-1 m-1 mt-6 rounded-md cursor-pointer">
                            Subscriptions
                        </h1>
                        <ul>
                            {contentTwo.map((item, index) => (
                                <li
                                    key={index}
                                    className="mx-5 hover:bg-gray-200 transform transition duration-300 rounded-md px-0.5 cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        )
    );
}

export default SideBar; 