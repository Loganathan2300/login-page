import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
// import PrivateRouter from "./pages/PrivateRouter/PrivateRouter";
import { useSelector } from "react-redux";
import PrivateRouter from "./pages/PrivateRouter/PrivateRouter";
function App() {
  // const data = useSelector((state) => state.Loginstore.LoginModel);
  //   console.log(data, "datadata");
    // const localstorege = () => {
    //     if (localStorage.getItem("USER")) return true;
    //     else return false;
    // };
    const token = localStorage.getItem("token")
  return (
    <div>
      <BrowserRouter>
          <Routes>
             <Route path="/" element={<Login/>}/>
             {/* <Route element ={<PrivateRouter user={localstorege()}/>}> */}
             <Route path="/dashboard-page" element={<PrivateRouter isSignedIn={token?true:false}><Dashboard /></PrivateRouter>}/>
             {/* </Route> */}
             <Route path="*" element={<Error/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
