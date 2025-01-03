/* eslint-disable jsx-a11y/iframe-has-title */
    import React from 'react';
    import './Home.css';

    const Home = () => {
        return (
            <div className="container-fluid home-container">
            {/* Animated Abstract Shapes */}
                <div className="abstract-shape blob1"></div>
                <div className="abstract-shape blob2"></div>
                <div className="abstract-shape circle1"></div>
                <div className="abstract-shape circle2"></div>
                <div className="abstract-shape wave1"></div>
                <div className="abstract-shape dots"></div>

                <div className="row align-items-center ma">
                    {/* Left Section: Text Content */}
                    <div className="col-lg-6 text-section">
                        <h1>Welcome to My Creative Space</h1>
                        <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non justo sed elit facilisis sollicitudin.  
    Nullam eget nisi eget nunc vehicula efficitur a a felis</p>
                        <button className="btn btn-primary">Explore More</button>
                    </div>

                   {/* Right Section: Video */}
                   <div className="col-lg-6 video-section">
    <iframe
        width="100%" 
        height="50vh" 
        src="https://www.youtube.com/embed/ttWXapXj4cg?autoplay=1&loop=1&playlist=ttWXapXj4cg" 
        frameBorder="0" 
        allow="autoplay; encrypted-media" 
        allowFullScreen
        className="background-video"
    ></iframe>
</div>

                </div>
            </div>
        );
    };

    export default Home;
