import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import './settings.styles.scss'

const SettingsPage = () => {

    const currentUser = useSelector(selectCurrentUser);
    let navigate = useNavigate();
    
    useEffect(() => {
        if (!currentUser){
        return navigate("/");
    }
    }, [currentUser, navigate]);

    const [userCredentials, setUserCredentials] = useState({displayName: '', email: '', audition: ''});
    const {displayName, email, audition} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        console.log("Updating the data...");
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name] : value});
    }

    return (
        <div className="settings">
            <h2>Account Settings</h2>
            <span>Here you can update your personal data</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Barcode'
                    required
                />
                <FormInput
                    type='text'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='E-mail'
                    required
                />
                <FormInput
                    type='text'
                    name='audition'
                    value={audition}
                    onChange={handleChange}
                    label='Audition'
                    required
                />
            </form>
        </div>
    )
}

export default SettingsPage;