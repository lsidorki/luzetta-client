import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import './settings.styles.scss'

const SettingsPage = () => {

    let navigate = useNavigate();
    
    const currentUser = useSelector(selectCurrentUser);
    
    useEffect(() => {
        if (!currentUser) return navigate("/");
    }, [currentUser, navigate]);

    
    const [userCredentials, setUserCredentials] = useState({
        displayName: '', 
        email: '', 
        audition: '',
        barcode: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(currentUser) {
            console.log("Current User: " + JSON.stringify(currentUser));
            setUserCredentials({
                displayName: currentUser.displayName, 
                email: currentUser.email, 
                audition: currentUser.audition,
                barcode: currentUser.barcode
            });
        }
    }, [currentUser]);

    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoading(true);
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
                    value={userCredentials.displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='text'
                    name='email'
                    value={userCredentials.email}
                    onChange={handleChange}
                    label='E-mail'
                    required
                />
                <FormInput
                    type='text'
                    name='barcode'
                    value={userCredentials.barcode}
                    onChange={handleChange}
                    label='Barcode'
                />
                <FormInput
                    type='text'
                    name='audition'
                    value={userCredentials.audition}
                    onChange={handleChange}
                    label='Audition'
                />
                <CustomButton disabled={isLoading}>Change the data</CustomButton>
            </form>
        </div>
    )
}

export default SettingsPage;