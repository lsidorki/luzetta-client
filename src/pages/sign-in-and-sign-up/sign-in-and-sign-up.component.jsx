import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import SignIn from './../../components/sign-in/sign-in.component'
import SignUp from './../../components/sign-up/sign-up.component'

import './sign-in-and-sign-up.styles.scss'

const SignInAndSignUpPage = () => {
    const currentUser = useSelector(selectCurrentUser);
    let navigate = useNavigate();
    
    useEffect(() => {
        if (currentUser){
        return navigate("/");
    }
    }, [currentUser, navigate]);

    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage;