import { Outlet } from "react-router-dom";

//all pages of signup(outlet children) are inside signup_components in components folder
export function Signup(){
    return(
        <div>
          <Outlet/>  
        </div>
    )
}