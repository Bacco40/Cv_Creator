import React from "react";

function EndDate({value,handleExpChange}) {
    return <div className="leftSide">
            <label htmlFor="end">End Date:</label>&nbsp;
            <input
                name="end"
                type="date"
                id="end"
                className="expField"
                value={value}
                onChange={handleExpChange}
                required
            />
        </div>
}

export default EndDate;