import React from "react";
import './sidebar.css';
import { AiFillEye, AiFillHome, AiOutlineVerified, AiFillCompass } from "react-icons/ai";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="username">
                <AiFillEye /> Norton
            </div>
            <div className="mainItens">
                <div className="mainIcons">
                    <h4>Menu</h4>
                    <ul>
                        <li><AiFillHome /> Home</li>
                        <li><AiOutlineVerified /> Community</li>
                        <li><AiFillCompass /> Discover</li>
                        <li>Awards</li>
                    </ul>
                </div>
                <div className="libraryIcons">
                    <h4>Library</h4>
                    <ul>
                        <li>Recent</li>
                        <li>Top Rated</li>
                        <li>Downloaded</li>
                    </ul>
                </div>
                <div className="categoryIcons">
                    <h4>Category</h4>
                    <ul>
                        <li>TV - Show</li>
                        <li>Movie</li>
                        <li>Anime</li>
                    </ul>
                </div>
                <div className="generalIcons">
                    <h4>General</h4>
                    <ul>
                        <li>Settings</li>
                        <li>Log Out</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
