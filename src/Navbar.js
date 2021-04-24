import React from "react"
import "./style.css"
import "./Nav.css"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg text-white bg-grey" >
        {/* <a className="navbar-brand text-success" href="#">Navbar</a> */}

        <div id="primary-nav" className="collapse navbar-collapse" style={{paddingTop:"5px",paddingBottom:"5px"}}>
          <ul className="navbar-nav mr-auto">
            <li>
                <a className="navbar-brand navbar-brand-logo" href="#">
                    <div className="logo" style={{paddingLeft:"15px"}}>
                        <img src="Avatar.png" alt="profile"/>
                    </div>
                    {/* <div className="brand"> Creative Tim </div> */}
                </a>     
            </li> 

            <form className="form-inline my-2 my-lg-0" style={{paddingLeft:"70px"}}>
                <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search for a Partner or Domain"
                aria-label="Search"
                style={{width:"45rem",borderRadius:"30px"}}
                
                />
            
            </form>
            <button className="btn btn-outline-success my-2 my-sm-0" className="button" type="submit">
                Search
            </button> 
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                  <div className="logo" style={{paddingLeft:"200px"}}>
                      <img src="msges.png" alt="msg"/>
                  </div>
              </a>
               
            </li>

            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                  <div className="logo" style={{paddingLeft:"30px"}}>
                      <img src="notification.jpg" alt="Notification"/>
                  </div>
              </a>
               
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                  <div className="logo" style={{paddingLeft:"30px"}}>
                      <img src="people.png" alt="User"/>
                  </div>
              </a>
               
            </li>
            
            {/* <li className="nav-item">
              <a className="nav-link text-white" href="#">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link text-white">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Meeting</a>
            </li> */}
          </ul>
          
        </div>
      </nav>



    )
}


export default NavBar;