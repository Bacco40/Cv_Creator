import React,{ Component }  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
library.add(faNewspaper);

class Header extends Component {
  render(){
    return <div className="header">
            <FontAwesomeIcon icon="fa-solid fa-newspaper" />&nbsp; CV Builder
          </div>
  }
}

export default Header;