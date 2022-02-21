import React from "react";

function JobDesc({value,part,handleExpChange}) {
    if (part === "education"){
        return <textarea
            name="note"
            type="text"
            className="expField"
            placeholder="Additional information"
            value={value}
            onChange={handleExpChange}
            required
        />
    }else{
        return <textarea
            name="jobDesc"
            type="text"
            className="expField"
            placeholder="A brief description of the role"
            value={value}
            onChange={handleExpChange}
            required
        />
    }
}

export default JobDesc;