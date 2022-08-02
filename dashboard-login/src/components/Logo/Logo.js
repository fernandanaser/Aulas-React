import { Link } from "react-router-dom";
import { Imglogo } from "./Logo.styled";
import cat from "./logocat.png"

const Logo = () => {
    return (
      <Imglogo>
      <Link to="/"><img width="100" src={cat} alt="logo" /></Link>
      </Imglogo>
      
    )
  }
  
  export default Logo;