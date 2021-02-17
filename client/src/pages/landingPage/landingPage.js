import React from 'react';
import Top from '../../components/landingPage_Top/landingPage_Top';
import Main from '../../components/landingPage_Main/landingPage_Main';
import './landingPage.css';
// import "../styles/Intro.css";
// import { Button } from "react-bootstrap";



const landingPage = () => {
    return (
        <div>
        <Top />
        <Main />
        </div>
    );
};

export default landingPage;