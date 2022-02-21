import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
library.add(faCamera);

function Photo({src,handleChange}) {
    if(src === ""){
        return <div className="photoDiv">
            <label htmlFor="photo"><FontAwesomeIcon className="camera" icon="fa-solid fa-camera" /></label>
                <input 
                    type="file" 
                    id="photo"
                    name="photo"
                    accept="image/*"
                    onChange={handleChange} 
                />
        </div>
    }else{
        return <div className="photoDiv">
            <label htmlFor="photo"><img className="photoDiv" src={src} alt="profile pic"/></label>
            <input 
                    type="file" 
                    id="photo"
                    name="photo"
                    accept="image/*"
                    onChange={handleChange} 
                />
        </div>
    }
    
}
    
export default Photo;
