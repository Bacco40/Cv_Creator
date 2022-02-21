import React from "react";

function Skill({value, part, handleSkillChange}) {
    return <input
        name="skill"
        type="text"
        className="expField"
        placeholder="Skill"
        value={value}
        onChange={handleSkillChange}
        required
    />
}

export default Skill;