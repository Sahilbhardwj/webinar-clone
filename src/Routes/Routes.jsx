 import { Routes, Route } from "react-router-dom";
import { Emailverificationpage } from "../components/signup_components/EmailverificationPage";
import { OTPPage } from "../components/signup_components/OtpPage";
import { Dashboard } from "../pages/HomeDashboard";
import { LandingPage } from "../pages/LandingPage";
import { Signup } from "../pages/signup";
import { Dob } from "../components/signup_components/Dobpage";
import { Login } from "../pages/loginpage";


export function AppRoutes(){
    return(
      <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/signup" element={<Signup/>}>
                <Route index element={<Dob/>}/>
                <Route path="mail" element={<Emailverificationpage/>}/>
                <Route path="myotp" element={<OTPPage/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}
 