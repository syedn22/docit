import React from 'react';

import { NavLink,Link } from 'react-router-dom';

function Documents() {
    return (
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",width:"100%"}}>
        <Link to="/">   <div className="card" style={{width:"300px",height:"25vh",borderRadius:"10px",cursor:"pointer",position:"relative"}} >
                
                     <center><h6 className="white-text" style={{ fontFamily: "sans-serif",width:"100%",padding:"10px",fontStyle:"bold" }}>PERSONAL DOCUMENTS</h6></center>

                     <center><h5 style={{fontStyle: "bold",fontSize:"40px",color:"rgb(167 167 167 / 50%)"}}>P D</h5><i style={{fontSize:"20px"}} class="fa fa-file-pdf-o" aria-hidden="true"></i></center>
                 </div>
                 
            </Link>
            <Link to="/UploadFiles">  
                 <div className="card" style={{width:"300px",height:"25vh",borderRadius:"10px",cursor:"pointer",position:"relative"}} >
                
                 <center> <h6 className="white-text" style={{ fontFamily: "sans-serif",width:"100%",padding:"10px",fontStyle:"bold" }}>ON DUTY DOCUMENTS</h6></center>
                <center><h5 style={{fontStyle: "bold",fontSize:"40px",color:"rgb(167 167 167 / 50%)"}}>O D</h5><i style={{fontSize:"20px"}} class="fa fa-briefcase" aria-hidden="true"></i></center>
            </div>
            </Link>
            </div>
    )
}

export default Documents
