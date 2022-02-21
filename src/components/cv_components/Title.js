import React from "react";

function Title({value,handleChange}) {
    return <input 
            type="text" 
            id="title" 
            className="data"
            autoComplete="off" 
            placeholder="Current Role"
            onChange={handleChange} 
            value={value} 
    />
}

export default Title;