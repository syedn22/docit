import React,{useEffect,useState} from 'react';
import "../Css/UploadFiles.css";
import SubmittedFile from './SubmittedFile';

function UploadFiles() {
    const [Event, setEvent] = useState("0")
    useEffect(() => {

      //  document.getElementById('dt').max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
    }, [])

    const handleChange=(e)=>{
        console.log(e.target.value)
        setEvent(e.target.value);
    }
    return (
        <div className="container">
            {
                JSON.parse(localStorage.getItem("User")).people_type ==="student"?<>
            <center><h5>ON DUTY REASON</h5></center>
            
            <input type="text" placeholder="Title"></input>
            <input type="text" placeholder="Description"></input>
            <input type="date" placeholder="From Date" id="dt" accept="Pictures/png, Pictures/jpeg"></input>
            <select value={Event} onChange={handleChange}>
                <option value="Hackothon">Hackoothon</option>
            </select>
           
            <input type="file"></input>
            <br></br><br></br><br></br>
            <center><button className="btn btn blue">Submit</button></center>
        
        </>:
        
        <div>
            <SubmittedFile/>
        </div>
            }
        
            </div>
    )
}

export default UploadFiles
