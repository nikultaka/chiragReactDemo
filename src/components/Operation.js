// import React from 'react';
// import ReactDOM from 'react-dom';
import React from 'react'
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useState } from "react";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import alertMyToast from './Alert';


function Operation() {
    const [text, setText] = useState('');

    const changevalue = (event) => {
        setText(event.target.value)
    }

    const Convert = () => {
        if (text !== "") {
            var toupper = text.toUpperCase();
            setText(toupper)
            alertMyToast({ msg: 'Converted to Uppercase', msgType: 'success' });
        } else {
            alertMyToast({ msg: 'Please enter a text', msgType: 'warn' });
        }
    }

    const Clear = () => {
        var toupper = '';
        setText(toupper);
        alertMyToast({ msg: 'Cleared', msgType: 'info' });

    }

    const CopyText = () => {
        if (text !== "") {
            if (navigator.clipboard.writeText(text)) {
                alertMyToast({ msg: 'Copied to Clipboard', msgType: 'success' });
            }
        } else {
            alertMyToast({ msg: 'Please enter a text', msgType: 'warn' });
        }


    }

    return (
        <>
            <div className="container mt-3">
                <h3> Your Text Here</h3>
                <div className="form-group">
                    <textarea className="form-control" id="textarea" value={text} onChange={changevalue} name="textarea" rows="8" placeholder="Enter your text here..."></textarea>
                    <button className="btn btn-primary mt-3  mx-2 " onClick={Convert}>Convert To Upper</button>
                    <button className="btn btn-success mt-3 mx-2" onClick={Clear}>Clear</button>
                    <button className="btn btn-warning mt-3 mx-2" onClick={CopyText}>Copy</button>

                    <ToastContainer />

                </div>
                <div className="alert alert-primary  mt-3" role="alert">
                    you write <span className="badge badge-light text-dark">{text.length}</span>text and<span className="badge badge-success text-dark">{text.length > 0 ? (text.split(" ").length) - 1 : 0}</span> words.
                </div>
            </div>

        </>
    );
}
export default Operation;



