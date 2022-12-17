
import "./loading.css"
import {PacmanLoader} from "react-spinners" 

const Loading = () => {

    
  
    return (
      <div className="pacman" >
       <PacmanLoader color="#ee39ff" size={60}/>
      </div>
    );
  };
  
  export default Loading;