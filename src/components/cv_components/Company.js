import React from "react";

function Company({value,part,handleExpChange}) {
    if (part === "education"){
        return <input
            name="degree"
            type="text"
            className="expField"
            placeholder="Degree"
            value={value}
            onChange={handleExpChange}
            required
        />
    }else{
        return <input
            name="company"
            type="text"
            className="expField"
            placeholder="Company"
            value={value}
            onChange={handleExpChange}
            required
        />
    }
}

export default Company;