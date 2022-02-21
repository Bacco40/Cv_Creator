import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faPhone);

function Phone({value,handleChange}) {
    return <div className="leftSide">
            <FontAwesomeIcon className="icons" icon="fa-solid fa-phone" />
            <input 
                type="tel" 
                id="phone" 
                className="data"
                autoComplete="off" 
                placeholder="Phone Number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                onChange={handleChange} 
                value={value} 
            />
        </div>
}

export default Phone;