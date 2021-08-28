import React from "react";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import alertMyToast from './Alert';


function VideoMp3(){
    const [link, setlink] = useState('');



    const linkchange = (event) => {
        setlink(event.target.value)
    }
    



    const Download = (e) => {
     e.preventDefault()
     alertMyToast({ msg: 'this operaion is currently not working ', msgType: 'error' });

        // axios({
        //     method: 'POST',
        //     url: 'https://hajana1-ip-to-country-name-v1.p.rapidapi.com/free-ip-country-api.php',
        //     params: {ip: link},
        //     headers: {
        //         'x-rapidapi-host': 'hajana1-ip-to-country-name-v1.p.rapidapi.com',
        //         'x-rapidapi-key': 'bbdb19ae72msh77c05af1aa7aee9p12273djsnbcc777425024'
        //       }
            
        // })
        //     .then(function (response) {
        //         const data = response.data
        //         console.log(data)
        //         // setlink(
        //         //     data
        //         // );
            
        //     });

    }


return(
    <>
    <div className="container mt-3">
        <h1 className="mt-5"style={{ marginLeft: '450px' }} >Download Video To Mp3</h1>
    <form className ="mt-6">
  <div className="row mt-5">
    <div className="">
      <input type="text" className="form-control" value={link} onChange={linkchange} id="link" name="link" placeholder="Enter Link"/>
    </div>
    <ToastContainer />
  
  </div>
  <button className="btn btn-primary btn-lg mt-3 "style={{ marginLeft: '590px' }} onClick={Download} >Download</button>
</form>

</div>


    </>
);
}
export default VideoMp3;
