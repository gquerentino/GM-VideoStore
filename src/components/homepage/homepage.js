import React from "react";
import Sidebar from "../sidebar/sidebar";
import './homepage.css';

const Homepage = () => {
    return (
        <>
            <div className="homepage-container">
                <Sidebar />
                <section className="main-content">
                    <div className="header">
                        <div className="menu-itens">
                            <a href="#">Menu</a>
                            <a href="#">TV Show</a>
                            <a href="#">Anime</a>
                        </div>
                    </div>
                    <div className="main-banner">
                        <button className="watch-button">
                            Watch Now
                        </button>
                        <button className="add-button">
                            +
                        </button>
                    </div>
                    <div className="now-playing">
                        <div className="now-playing-menu">
                            <h2>Now Playing</h2>
                            <div className="now-playing-menu-buttons">
                            <button>&lt;</button>
                            <button>&gt;</button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

export default Homepage;