import React from 'react';
import Top from '../components/landingPage_Top';
import './landingPage.css';
// import "../styles/Intro.css";
// import { Button } from "react-bootstrap";



const landingPage = () => {
    return (
        <div>
        <Top />
        <div className="introDiv">
            <h1>Landing Page</h1>
        </div>
        </div>
    );
};

export default landingPage;