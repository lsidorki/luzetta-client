import React from "react";
import './welcome-screen.styles.scss'

import logo from './../../assets/goodies-happy-face.png'

const WelcomeScreen = () => {
    return (
        <div className="welcome-screen">
            <img src={logo} alt='Welcome'></img>
        </div>
    )
}

export default WelcomeScreen;