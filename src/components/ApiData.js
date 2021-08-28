import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function ApiData() {
    const [person, setPerson] = useState([]);
    const [oldclass, setClass] = useState('');
    const [oldbtn, setbtn] = useState('btn-light');



    useEffect(() => {
        apicall();
    });
    const darkmode = () => {
        // setClass('table-dark')
        // setbtn('btn-dark')
        if (oldclass == 'table-dark') {
            setClass('')
        } else {
            setClass('table-dark')
        }

        if (oldbtn == 'btn-light') {
            setbtn('btn-dark')

        } else {
            setbtn('btn-light')
        }


    }
    function apicall() {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts',
            responseType: 'json'
        })
            .then(function (response) {
                const data = response.data
                setPerson(
                    data
                );
            });

    }

    return (
        <>
            <div className="container mt-3">
                {/* <h1 style={{ marginLeft: '510px' }} className=" mt-3">User Details</h1> */}
                <button className={"btn btn-lg mt-3 " + oldbtn} style={{ marginLeft: '510px' }} onClick={darkmode} >User Details</button>

                <table className={"table table-bordered table-striped mt-3 " + oldclass}>
                    <thead className="">
                        <tr>
                            <th scope="col">UserId</th>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {person.map((persondata, index) =>
                            <tr key={index}>
                                <td>{persondata.userId}</td>
                                <td>{persondata.id}</td>
                                <td>{persondata.title}</td>
                                <td>{persondata.body}</td>

                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>

    );
}
export default ApiData;