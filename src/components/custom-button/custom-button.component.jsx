import React from "react"
import './custom-button.styles.scss'

const CustomButton = ({children, onChange, isDonate, isOpenFile, isGoogleSignIn, ...otherProps}) => (
    isOpenFile ? 
    (<div className="custom-button file-input">
        <input onChange={onChange} type="file" id="file" className="file" {...otherProps} />
        <label htmlFor="file">{children}</label>
    </div>
    ) :
        (<button className={`custom-button${isDonate ? ' donate' : ''}`} {...otherProps}>
        {children}
    </button>
    )
)


export default CustomButton;