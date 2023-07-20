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
                    <h4>MENU</h4>
                    <ul>
                        <a href="#"><li><AiFillHome /> Home</li></a>
                        <a href="#"><li><AiFillSafetyCertificate /> Community</li></a>
                        <a href="#"><li><AiFillCompass /> Discover</li></a>
                        <a href="#"><li><AiFillDollarCircle /> Awards</li></a>
                    </ul>
                </div>
                <div className="libraryIcons">
                    <h4>LIBRARY</h4>
                    <ul>
                        <a href="#"><li><AiFillClockCircle /> Recent</li></a>
                        <a href="#"><li><AiFillStar /> Top Rated</li></a>
                        <a href="#"><li><AiOutlineDownload /> Downloaded</li></a>
                    </ul>
                </div>
                <div className="categoryIcons">
                    <h4>CATEGORY</h4>
                    <ul>
                        <a href="#"><li><AiOutlineVideoCamera /> TV - Show</li></a>
                        <a href="#"><li><AiOutlinePlaySquare /> Movie</li></a>
                        <a href="#"><li><AiOutlineFire /> Anime</li></a>
                    </ul>
                </div>
                <div className="generalIcons">
                    <h4>GENERAL</h4>
                    <ul>
                        <a href="#"><li><AiOutlineSetting /> Settings</li></a>
                        <a href="#"><li><AiOutlineLogout /> Log Out</li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
