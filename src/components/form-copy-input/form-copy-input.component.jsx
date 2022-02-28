import React, { useRef, useState } from "react";
import { Overlay, Tooltip } from "react-bootstrap";

const FormCopyInput = ({handleChange, label, placeholder, ...otherProps}) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(placeholder);
        showTooltip();
        console.log("Copied: " + placeholder);
    };

    const showTooltip = () => {
        setShow(true);
        setTimeout( () => {setShow(false)}, 1000);
    }

    return (<div className="group">
        <div className="input-group mb-3">
            <span className="input-group-text">{label}</span>
            <input type="text" className="form-control" placeholder={placeholder} value={placeholder} aria-label={label} aria-describedby="button-addon2" disabled readOnly />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={copyToClipboard} ref={target}>Copy</button>
            <Overlay target={target.current} show={show} placement="top-end" >
                {(props) => (
                <Tooltip id="overlay-example" {...props}>
                    Copied!
                </Tooltip>
                )}
            </Overlay>
        </div>
    </div>)
}

export default FormCopyInput;