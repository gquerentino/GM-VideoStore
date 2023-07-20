import React from "react";
import './sidebar.css';
import { AiFillEye, AiOutlineSetting, AiOutlineLogout, AiFillHome, AiOutlineFire, AiOutlinePlaySquare, AiOutlineVerified, AiFillCompass, AiFillSafetyCertificate, AiFillDollarCircle, AiFillClockCircle, AiFillStar, AiOutlineDownload, AiOutlineVideoCamera } from "react-icons/ai";

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
                        <li><AiFillSafetyCertificate /> Community</li>
                        <li><AiFillCompass /> Discover</li>
                        <li><AiFillDollarCircle /> Awards</li>
                    </ul>
                </div>
                <div className="libraryIcons">
                    <h4>Library</h4>
                    <ul>
                        <li><AiFillClockCircle /> Recent</li>
                        <li><AiFillStar /> Top Rated</li>
                        <li><AiOutlineDownload /> Downloaded</li>
                    </ul>
                </div>
                <div className="categoryIcons">
                    <h4>Category</h4>
                    <ul>
                        <li><AiOutlineVideoCamera /> TV - Show</li>
                        <li><AiOutlinePlaySquare /> Movie</li>
                        <li><AiOutlineFire /> Anime</li>
                    </ul>
                </div>
                <div className="generalIcons">
                    <h4>General</h4>
                    <ul>
                        <li><AiOutlineSetting /> Settings</li>
                        <li><AiOutlineLogout /> Log Out</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
