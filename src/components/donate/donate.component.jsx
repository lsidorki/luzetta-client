import React from "react";
import { Button, Modal } from "react-bootstrap";
import donate from './../../assets/purr-birthday-present.png'
import './donate.styles.scss'

const DonateModal = (props) => {
    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Donate!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="donate-modal-content">
            <img src={donate} alt='Donate'></img>
            <h4>Saved some time while filling the report?</h4>
            <p>Help improve this app and cover the cost of maintenance. The amount is up to you!<br />
            Thank You in advance!
            </p>
            <p>BLIK: +48 792 269 266</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
}

export default DonateModal;