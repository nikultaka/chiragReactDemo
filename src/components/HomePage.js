import React, { Component, useEffect,useState } from 'react'
// import { Text, View } from 'react-native'


function HomePage() {
    // const [isCancelled, setCancelled] = useState(false);
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
                if (myh1 != 'null' && myh1 != undefined && myh1 != 'undefined' && myh1.style.color == "darkorange") {
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
            <div class="container" >
                <div className="jumbotron" style={navstyle}>
                    <h1 className="myH1" id="myH1" style={fontstyle}>WELCOME</h1>
                    <p style={ptagtyle}>Experiance New World !</p>
                </div>
            </div>
        </>
    );
}
export default HomePage;


