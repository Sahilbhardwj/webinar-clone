import './App.css'
import './index.css'; 
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './Routes/Routes';
function App() {

  return ( 
    <div>
        
        <BrowserRouter basename="/webinar-clone">
         <AppRoutes/>
        </BrowserRouter>
    </div>
  )
}

export default App
