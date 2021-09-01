import React, { Component, useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';


function TestPage() {
    
    const counter = useSelector(state => state.counter);

    return (
        <>
            <div className="container" >
                <h1>Test Page {counter}</h1> 
            </div>
        </>
    );
}
export default TestPage;


