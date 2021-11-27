import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider";
import AllEvents from "./Components/Pages/AllEvents/AllEvents";
import FundHistory from "./Components/Pages/FundHistory/FundHistory";
import Home from "./Components/Pages/Home/Home/Home";
import Members from "./Components/Pages/Home/Members/Members";
import Footer from "./Components/Pages/Shared/Footer/Footer";
import Navbar from "./Components/Pages/Shared/Navbar/Navbar";
import Sidebar from "./Components/Pages/Sidebar/Sidebar";
import UserProfile from "./Components/Pages/UserProfile/UserProfile";
import UserLogin from "./Components/Pages/UserRegistration/UserLogin/UserLogin";
import UserRegistration from "./Components/Pages/UserRegistration/UserRegistration/UserRegistration";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Sidebar></Sidebar>
          <div style={{ marginLeft: "40px" }}>
            <Navbar></Navbar>
            <Routes>
              <Route exact path="/" element={<Home></Home>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path="/members" element={<Members></Members>}></Route>
              <Route path="/events" element={<AllEvents></AllEvents>}></Route>
              <Route
                path="/fundhistory"
                element={<FundHistory></FundHistory>}
              ></Route>
              <Route
                path="/profile:name"
                element={<UserProfile></UserProfile>}
              ></Route>
              <Route path="/login" element={<UserLogin></UserLogin>}></Route>
              <Route
                path="/registration"
                element={<UserRegistration></UserRegistration>}
              ></Route>
            </Routes>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
