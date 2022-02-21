import React from "react";

function StartDate({value,handleExpChange}) {
    return <div className="leftSide">
            <label htmlFor="start">Start Date:</label>
            <input
                name="start"
                type="date"
                id="start"
                className="expField"
                value={value}
                onChange={handleExpChange}
                required
            />
        </div>
}

export default StartDate;