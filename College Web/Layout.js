import "./Layout.css"; 
import { Outlet, Link } from "react-router-dom"; 
 
const Layout = () => {   
  return (     
    <> 
      <nav> 
 	  <center><img src="/college.jpg" width="38%"></img></center> 
 	  <center> 
      <table width="100%"> 
      <tr width="100%"> 
 	  <center> 
    <td width="20%"><Link className="linkref" to="/">Home</Link></td> 
 	  <td width="20%"><Link className="linkref" to="/About">About</Link></td> 
 	  <td width="20%"><Link className="linkref" to="/Facilities">Facilities</Link></td> 
    <td width="20%"><Link className="linkref" to="/Department">Department</Link></td> 
 	  <td width="20%"><Link className="linkref" to="/Contact">Contact</Link></td> 
 	  </center> 
      </tr> 
      </table> 
 	  </center> 
      </nav> 
      <Outlet /> 
  </> 
    ) 
}  
export default Layout;
