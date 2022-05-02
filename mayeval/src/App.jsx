import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Order";
import { ProtectedRoute } from "./components/ProtectedRoute";
import {Link,Route,Routes} from "react-router-dom";
import {useState} from "react";

function App() {
   const [loginn,setLogin]=useState(false);

  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home


          
        </Link>
        {loginn ===false ? <Link className="nav-login" to="/login">
          Login
        </Link> :<Link className="nav-logout" to="/logout">
          Logout
        </Link>  }

        {/* Show either login or logout below */}
      {/* <Link className="nav-logout" to="/logout">
          Logout
         </Link>
        <Link className="nav-login" to="/login">
          Login
         </Link> */}
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        

        */}



       <Route path="/" element={<Home/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/logout" element={<Logout/>}></Route>
       <Route path="/order" element={<Logout/>}></Route>
       <Route path="/NewOrder" element={<Logout/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
