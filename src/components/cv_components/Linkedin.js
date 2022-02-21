import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
library.add(faLinkedinIn);

function Linkedin({value,handleChange}) {
    return <div className="leftSide">
            <FontAwesomeIcon className="icons" icon="fab fa-linkedin-in" />
            <input 
                type="url" 
                id="linkedin"
                className="data" 
                autoComplete="off" 
                placeholder="Linkedin Profile"
                onChange={handleChange} 
                value={value} 
            />
        </div>
    
}

export default Linkedin;