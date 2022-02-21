import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
library.add(faMapLocationDot);

function Address({value,handleChange}) {
    return <div className="leftSide">
            <FontAwesomeIcon className="icons" icon="fa-solid fa-map-location-dot" />
            <input 
                type="text" 
                id="address"
                className="data" 
                autoComplete="off" 
                placeholder="Address"
                onChange={handleChange} 
                value={value} 
            />
            </div>
}

export default Address;