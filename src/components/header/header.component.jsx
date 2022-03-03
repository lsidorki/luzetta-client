import React from "react";
import { Link } from "react-router-dom";
import { signOutStart } from "../../redux/user/user.actions";
import './header.styles.scss'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({currentUser, signOutStart}) => (
    <div className="header">
        <Link className="logo" to="/">LUZetta</Link>
        <div className="options">
            <Link className="option" to="/">HOME</Link>
            {
                currentUser ?
                <Link className="option" to="/report">YOUR REPORT</Link>
                :
                null
            }
            {
                currentUser ?
                <Link className="option" to="/settings">SETTINGS</Link>
                :
                null
            }
            {
                currentUser ?
                (<div className="option" onClick={signOutStart}>SIGN OUT</div>)
                :
                (<Link className="option" to="/signin">SIGN IN</Link>)
            }
        </div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);