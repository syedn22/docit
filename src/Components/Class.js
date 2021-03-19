import React,{useEffect} from 'react'
import M from 'materialize-css';
import { NavLink,Link } from 'react-router-dom';
import Batch from './Batch';
import Documents from './Documents';
import People from './People';
import SubmittedFile from './SubmittedFile';

function Class(props) {
    useEffect(()=>{
            let el = document.querySelector('.tabs');
             M.Tabs.init(el);
        
         },[])
    return (
       
       
<>
<div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <ul className="tabs tabs-fixed-width tab-demo z-depth-1">
            <li className="tab"><a href="#test1"><i className="fa fa-home" aria-hidden="true"></i> Home</a></li>
    <li className="tab"><Link to="#test2"><i className="fa fa-file" aria-hidden="true"></i> Documents</Link></li>
     <li className="tab"><a href="#test3"><i className="fa fa-graduation-cap" aria-hidden="true"></i> People</a></li>
</ul>


   <div id="test1" className="container" >
       <br></br>      <br></br>
   <Batch batchid={props.match.params.id}/>
   </div>


   <div id="test2" style={{width:"100%"}}>
   <br></br><br></br>
   {
       JSON.parse(localStorage.getItem("User")).people_type ==="student"?
       <Documents/>:
       <div className="container">
   <SubmittedFile/>
   </div>
       }
     
   </div>

   <div id="test3" className="col s12 container">
   <br></br><br></br>
     <People/>
        </div>

         </div>
         </>
    )
}

export default Class
