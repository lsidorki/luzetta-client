import React, { useState } from "react";
import { Button, Modal, ProgressBar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './fetch-data-api.styles.scss'

const FetchDataApiModal = (props) => {

    const dispatch = useDispatch();

    const [userCredentials, setUserCredentials] = useState({
        username: '', 
        password: '', 
        apikey: ''
    });

    const [now, setNow] = useState(0);

    const handleSubmit = async event => {
        event.preventDefault();
        console.log("Handle Submit");
        setNow(100);
        // dispatch(updateUserStart(userCredentials));
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name] : value});
    }

    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Fetch External Data
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="fetch-data-api-modal-content">
                <h4>API Credentials</h4>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='username'
                        value={userCredentials.username}
                        onChange={handleChange}
                        label='Username'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={userCredentials.password}
                        onChange={handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='text'
                        name='apikey'
                        value={userCredentials.apikey}
                        onChange={handleChange}
                        label='API key'
                        required
                    />
                    <CustomButton>Process the data</CustomButton>
                </form>
                <div className="fetch-progress-bar">
                    <ProgressBar variant="warning" animated now={now} label={`${now}%`} />
                </div>
            </div>
        </Modal.Body>
        </Modal>
    );
}

export default FetchDataApiModal;