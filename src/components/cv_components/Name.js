import React from "react";

function Name({value,handleChange}) {
    return <input 
            type="text" 
            id="fullName" 
            className="data"
            autoComplete="off" 
            placeholder="Full Name"
            onChange={handleChange} 
            value={value} 
    />
}

export default Name;