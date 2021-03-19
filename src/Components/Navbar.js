import React from 'react';
import "../Css/navbar.css";
import {Link,NavLink} from 'react-router-dom';
import {useEffect} from 'react'; 
import M from 'materialize-css';

function Navbar(props) {
  useEffect(()=>{
    var elems = document.querySelectorAll('.sidenav');
     M.Sidenav.init(elems);
   console.log(props.selectedclass);
     
})
  
    return (
        <>
        <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo blue-text text-darken-2 flex">
              <img src="/Assets/logo.png" width="30" height="30" className="avatar"  alt=""></img>
             DocIt
            </a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons blue-text text-darken-2">menu</i></a>
                  {
              props.selectedclass!=null? <ul className="right hide-on-med-and-down">
              <li className="center"><NavLink exact to="/" activeStyle={{background:"#dfd6d6"}}className="blue-text text-darken-2"><i class="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;Home</NavLink></li>
      <li ><NavLink activeStyle={{background:"#dfd6d6"}} exact to="/" className="blue-text text-darken-2"><i class="fa fa-file" aria-hidden="true"></i>&nbsp;&nbsp; Documents</NavLink></li>
              <li><NavLink activeStyle={{background:"#dfd6d6"}} exact to="/" className="blue-text text-darken-2"><i class="fa fa-users" aria-hidden="true"></i> &nbsp;&nbsp;People</NavLink></li>
              <li ><NavLink activeStyle={{background:"#dfd6d6"}}  to="/Profile" className="blue-text text-darken-2 flex"><img src="/Assets/pic1.jpg" width="30" height="30" className="avatar"  alt=""></img>&nbsp;{localStorage.getItem('email')}</NavLink></li>
              </ul>:
              <ul className="right hide-on-med-and-down"> <li ><NavLink activeStyle={{background:"#dfd6d6"}}  to="/Profile" className="blue-text text-darken-2 flex"><img src="/Assets/pic1.jpg" width="30" height="30" className="avatar"  alt=""></img>&nbsp;{JSON.parse(localStorage.getItem('User')).email}</NavLink></li>
              </ul>        
            }
           
        
        </div>
      </nav>
    
      <ul className="sidenav" id="mobile-demo">
      <li ><Link  to="/Profile" className="blue-text text-darken-2"><div className="profile_flex"><img src="/Assets/pic1.jpg" className="avatar" width="30" height="30" alt=""></img>&nbsp;{JSON.parse(localStorage.getItem('User')).email}</div></Link></li>
      <br></br>
      <li><Link exact to="/" className="blue-text text-darken-2"><div className="profile_flex"> <i class="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;Home</div></Link></li>
      <li><div className="profile_flex blue-text text-darken-2"> <i class="fa fa-file" aria-hidden="true"></i>&nbsp;&nbsp; Documents</div></li>
     <li><div className="profile_flex blue-text text-darken-2"> <i class="fa fa-users" aria-hidden="true"></i> &nbsp;&nbsp;People</div></li>
      </ul>
      </>
    )
}

export default Navbar
