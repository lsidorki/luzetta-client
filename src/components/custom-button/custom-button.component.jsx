import React from "react"
import './custom-button.styles.scss'

const CustomButton = ({name, isDonate, ...otherProps}) => {
    return (
        <button className={`custom-button${isDonate ? ' donate' : ''}`} {...otherProps}>
            {name}
        </button>
    )
}

export default CustomButton;