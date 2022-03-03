import React from "react";
import { Spinner } from "react-bootstrap";

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? <Spinner animation="border" /> :  <WrappedComponent {...otherProps} />
};

export default WithSpinner;