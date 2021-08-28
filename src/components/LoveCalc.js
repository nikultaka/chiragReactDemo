import React from "react";
import axios from "axios";
import { useState } from "react";

function LoveCalc(){
    const [male, setmale] = useState('');
    const [female, setfemale] = useState('');
    const [metch, setmetch] = useState([]);


    const malechange = (event) => {
        setmale(event.target.value)
    }
    
    const femalechange = (event) => {
        setfemale(event.target.value)
    }


    function calculate(e) {
     e.preventDefault()
        axios({
            method: 'get',
            url: 'https://love-calculator.p.rapidapi.com/getPercentage',
            params: {fname: male, sname: female},
            headers: {
              'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
              'x-rapidapi-key': 'bbdb19ae72msh77c05af1aa7aee9p12273djsnbcc777425024'
            }
        })
            .then(function (response) {
                const data = response.data
                setmetch(
                    data
                );
            
            });

    }


return(
    <>
    <div className="container mt-3">
        <h1 className="mt-5"style={{ marginLeft: '520px' }} >Find Your Match !</h1>
    <form className ="mt-6">
  <div className="row mt-5">
    <div className="col-md-6">
      <input type="text" className="form-control" value={male} onChange={malechange} id="male" name="male" placeholder="Male"/>
    </div>
    <div className="col-md-6">
      <input type="text" className="form-control"  value    ={female} onChange={femalechange} id="female" name="female" placeholder="Female"/>
    </div>
  </div>
  <button className="btn btn-primary btn-lg mt-3 "style={{ marginLeft: '590px' }} onClick={calculate} >Calculate</button>
</form>
{(metch.percentage)? 

<div className="alert alert-primary mt-3" role="alert">
  <h4 className="alert-heading">{metch.result}</h4>
  <p>Percentage : {metch.percentage} %</p>
</div>
:''}
</div>


    </>
);
}
export default LoveCalc;
