import React from "react";

function Description({value,handleChange}) {
    return <textarea
            type="text" 
            id="description" 
            autoComplete="off" 
            placeholder="A brief description about yourself"
            onChange={handleChange} 
            value={value} 
    />
}

export default Description;