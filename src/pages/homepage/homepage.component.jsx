import React from 'react';
import './homepage.styles.scss'

import ControlCenter from '../../components/control-center/control-center.component';
import WelcomeScreen from '../../components/welcome-screen/welcome-screen.component';
import Tracklist from '../../components/tracklist/tracklist.component';

const HomePage = () => {
    return (
        <div className="homepage">
            <WelcomeScreen />
            <ControlCenter />
            <Tracklist />
        </div>
    )
}

export default HomePage;