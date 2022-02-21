import React from "react";

function Position({value, part, handleExpChange}) {
    if (part === "education"){
        return <input
            name="name"
            type="text"
            className="expField"
            placeholder="School name"
            value={value}
            onChange={handleExpChange}
            required
        />
    }else{
        return <input
            name="position"
            type="text"
            className="expField"
            placeholder="Position"
            value={value}
            onChange={handleExpChange}
            required
        />
    }
}

export default Position;