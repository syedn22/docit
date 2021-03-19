import React from 'react';

function Batch(props) {

    const {batchid}=props;
    return (
        <div className="card container" style={{width:"100%",height:"40vh",borderRadius:"10px",cursor:"pointer",position:"relative"}} >
                   
        <center><h6 className="white-text" style={{ fontFamily: "sans-serif",width:"100%",padding:"10px",fontStyle:"bold" }}>{batchid}</h6></center>

        <center><h5 style={{fontStyle: "bold",fontSize:"40px",color:"rgb(167 167 167 / 50%)"}}>{batchid}</h5></center>
    </div>

    )
}

export default Batch
