import "./App.css";
import image from "./user.png" 
import image2 from "./topimg.png"  
import Form from "./components/Form" 
import React  from "react";

function App() {
   return (
    <div className ="login" >
        <div className="login-card"> 
        <div className="img-top"> <img src={image2}></img></div> 
        <div className="image-section"> <img src = {image}/>
        <Form/>
        </div>
        
       
        </div>
    </div>
   );
}

export default App;
