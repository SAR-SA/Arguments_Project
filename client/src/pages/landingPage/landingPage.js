import React from 'react';
import Top from '../../components/landingPage_Top/landingPage_Top';
import Main from '../../components/landingPage_Main/landingPage_Main';
import Bottom from '../../components/landingPage_Bottom/landingPage_Bottom';
import './landingPage.css';
// import "../styles/Intro.css";
// import { Button } from "react-bootstrap";



const landingPage = () => {
    return (
        <div>
        <Top />
        <Main />
        <Bottom />
        </div>
    );
};

export default landingPage;