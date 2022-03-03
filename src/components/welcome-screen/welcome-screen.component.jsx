import React from "react";
import './welcome-screen.styles.scss'

import logo from './../../assets/goodies-happy-face.png'
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";

const WelcomeScreen = ({currentUser}) => {
    return (
        <div className="welcome-screen">
            <img src={logo} alt='Welcome'></img>
            {
                currentUser ?
                (<div className="welcome-communicate">
                    <Alert variant="success">
                        <Alert.Heading>Hey there, {currentUser.displayName}!</Alert.Heading>
                        <p>Go to 'Your Report' to manage your tracklist. <br />
                        Don't forget to update your profile in 'Settings' section!</p>
                        <hr />
                        <p>If you like this app, <b>please donate</b>, so it can be further improved and costs of running the site can be covered.</p>
                    </Alert>
                </div>)
                :
                (<div className="welcome-communicate">
                    <Alert variant="success">
                        <Alert.Heading>Welcome to LUZetta!</Alert.Heading>
                        <p>Sign In to see more options.</p>
                        <hr />
                        <p>If you like this app, <b>please donate</b>, so it can be further improved and costs of running the site can be covered.</p>
                    </Alert>
                </div>)
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps, null)(WelcomeScreen);