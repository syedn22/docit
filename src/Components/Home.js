import React from 'react';
import '../Css/Home.css';
 import {useEffect} from 'react'; 
 import {Link} from 'react-router-dom'




function Home(props) {
     useEffect(()=>{
      localStorage.setItem("SelectedClass",null)
     },[])

     let classroom=[
        {
            "name":"MSC-SOFTWARE-SYSTEMS-2018 BATCH",
            "department":"SS",
            "batch":2018
        },
        {
            "name":"MSC-SOFTWARE-SYSTEMS-2019 BATCH",
            "department":"SS",
            "batch":2019
        },
        {
            "name":"MSC-SOFTWARE-SYSTEMS-2020 BATCH",
            "department":"SS",
            "batch":2020
        },
        {
            "name":"MSC-DATA SCIENCE-2020 BATCH",
            "department":"DS",
            "batch":2020
        }
    ]

    return (
        

        <>
        <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",width:"100%"}}>
        {
            classroom.map(c=>{
                    return(
                        <Link to={`/Class/${c.name}`} onClick={(e)=>{localStorage.setItem("SelectedClass",JSON.stringify(c));console.log(localStorage.getItem("SelectedClass"))}}>
                    <div className="card" style={{width:"300px",height:"25vh",borderRadius:"10px",cursor:"pointer",position:"relative"}} >
                   
                        <h6 className="white-text" style={{ fontFamily: "sans-serif",width:"100%",padding:"10px",fontStyle:"bold" }}>{c.name}</h6>

                        <center><h5 style={{fontStyle: "bold",fontSize:"40px"}}>{c.batch} - {c.department}</h5></center>
                    </div></Link> )
            })
        }
        </div>
        
        </>
    )
}

export default Home


