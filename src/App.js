import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {Route,Switch} from 'react-router-dom';
import Profile from './Components/Profile';
import Class from './Components/Class';
import {useEffect,useState} from 'react';
import UploadFiles from './Components/UploadFiles';
import Batch from './Components/Batch';
import Documents from './Components/Documents';

function App() {

  const [selected, setselected] = useState(null)
  useEffect(() => {
    localStorage.setItem("User",JSON.stringify({"email":"hari20010321@gmail.com","people_type":"professor"}));
    localStorage.setItem("email","hari21032001@gmail.com")
    localStorage.setItem("SelectedClass",null);
    console.log(localStorage.getItem("SelectedClass"));
  }, [])
  return (
    <div className="App">
      <>
      <Navbar selectedclass={selected}/>
        <Switch>
        <Route  path="/Class/:id" component={Class}>
      </Route>
        <Route exact="true" path="/">
        <Home selected={localStorage.getItem("SelectedClass")}></Home>
      </Route>
      <Route  path="/Profile">
        <Profile/>
      </Route>
      <Route  path="/UploadFiles">
        <UploadFiles/>
      </Route>
      </Switch>
      </>
    </div>
  );
}

export default App;
