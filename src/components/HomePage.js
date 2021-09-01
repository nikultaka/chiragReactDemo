import React, { Component, useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../actions/counteraction';
import { decrement } from '../actions/counteraction';

function HomePage() {
    
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch()
    
    const navstyle = {
        marginTop: '300px',
        marginLeft: '250px'
    };
    const fontstyle = {
        fontSize: '150px',
        color: 'darkblue',

    };
    const ptagtyle = {
        fontFamily: 'cursive',
        marginLeft: '200px',
        fontSize: '30px',
    };

    useEffect(() => {
        const interval = setInterval(function () {
            // console.log("call every at 1 second");
            var myh1 = document.getElementById("myH1");
                if (myh1 !== 'null' && myh1 !== undefined && myh1 !== 'undefined' && myh1.style.color == "darkorange") {
                myh1.style.color = "darkblue";
            } else {
                myh1.style.color = "darkorange";
            }
        }, 1000);
        //this is for clear interval when change the page
        return () => {
            clearInterval(interval);
        };
    }, [])


    return (
        <>
            <div className="container" >
                <div className="jumbotron" style={navstyle}>
                    <h1 className="myH1" id="myH1" style={fontstyle}>WELCOME</h1>
                    <button onClick= {()=>dispatch(increment())}>Increment</button>
                    <button onClick= {()=>dispatch(decrement())}>Decrement</button>
                    <p style={ptagtyle}>Experiance New World ! counter : {counter}</p>
                </div>
            </div>
        </>
    );
}
export default HomePage;


