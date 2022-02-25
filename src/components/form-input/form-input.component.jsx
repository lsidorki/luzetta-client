import React from "react";

const FormInput = ({handleChange, label, placeholder, ...otherProps}) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(placeholder);
        console.log("Copied: " + placeholder);
    };
    return (<div className="group">
        <div className="input-group mb-3">
            <span className="input-group-text">{label}</span>
            <input type="text" className="form-control" placeholder={placeholder} value={placeholder} aria-label={label} aria-describedby="button-addon2" disabled readOnly />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={copyToClipboard}>Copy</button>
        </div>
    </div>)
}

export default FormInput;