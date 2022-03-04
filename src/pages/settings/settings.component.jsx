import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import { updateUserStart } from "../../redux/user/user.actions";
import { selectCurrentUser, selectIsUpdating } from "../../redux/user/user.selectors";
import './settings.styles.scss'

const SettingsPage = () => {

    let navigate = useNavigate();
    
    const currentUser = useSelector(selectCurrentUser);
    const isUpdating = useSelector(selectIsUpdating);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!currentUser) return navigate("/");
    }, [currentUser, navigate]);
    
    const [userCredentials, setUserCredentials] = useState({
        displayName: '', 
        email: '', 
        audition: '',
        barcode: ''
    });

    useEffect(() => {
        if(currentUser) {
            setUserCredentials({
                uid: currentUser.id,
                displayName: currentUser.displayName, 
                email: currentUser.email, 
                audition: currentUser.audition,
                barcode: currentUser.barcode
            });
        }
    }, [currentUser]);

    const handleSubmit = async event => {
        event.preventDefault();
        dispatch(updateUserStart(userCredentials));
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
                    disabled
                />
                <FormInput
                    type='text'
                    name='email'
                    value={userCredentials.email}
                    onChange={handleChange}
                    label='E-mail'
                    required
                    disabled
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
                <CustomButton disabled={isUpdating}>Change the data</CustomButton>
            </form>
        </div>
    )
}

export default SettingsPage;