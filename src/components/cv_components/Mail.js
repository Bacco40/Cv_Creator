import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope);

function Email({value,handleChange}) {
    return <div className="leftSide">
            <FontAwesomeIcon  className="icons" icon="fa-solid fa-envelope" />
            <input 
                type="email" 
                id="email"
                className="data" 
                autoComplete="off" 
                placeholder="E-mail"
                onChange={handleChange} 
                value={value} 
            />
        </div>
}

export default Email;