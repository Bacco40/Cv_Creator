import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


library.add(faPlus, faTrashCan);

function AddExperience() {
  const [experience, setExperience] = useState([{ position: "", company:"", jobDesc:"", start:"", end:""}]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...experience];
    list[index][name] = value;
    setExperience(list);
  };

  const handleExperienceRemove = (index) => {
    const list = [...experience];
    if(list.length !==1){
        list.splice(index, 1);
        setExperience(list);
    }
  };

  const handleExperienceAdd = () => {
    setExperience([...experience, { position: "", company:"", jobDesc:"", start:"", end:""}]);
  };

  return (
    <div className="singleExperience">
    {experience.map((singleExp, index) => (
        <div key={index} className="experience">
        <div className="center">
            <input
            name="position"
            type="text"
            className="expField"
            placeholder="Position"
            value={singleExp.position}
            onChange={(e) => handleChange(e, index)}
            required
            />
            <input
            name="company"
            type="text"
            className="expField"
            placeholder="Company"
            value={singleExp.company}
            onChange={(e) => handleChange(e, index)}
            required
            />
            <textarea
            name="jobDesc"
            type="text"
            className="expField"
            placeholder="A brief description of the role"
            value={singleExp.jobDesc}
            onChange={(e) => handleChange(e, index)}
            required
            />
        </div>
        <div className="left">
            <div className="leftSide">
                <label htmlFor="start">Start Date:</label>
                <input
                name="start"
                type="date"
                className="expField"
                value={singleExp.start}
                onChange={(e) => handleChange(e, index)}
                required
                />
            </div>
            <div className="leftSide">
                <label htmlFor="start">End Date: </label>&nbsp;
                <input
                name="end"
                type="date"
                className="expField"
                value={singleExp.end}
                onChange={(e) => handleChange(e, index)}
                required
                />
            </div>
            {experience.length !== 0 && (
            <button
                type="button"
                onClick={() => handleExperienceRemove(index)}
                className="removeBtn"
            >
                &nbsp;<FontAwesomeIcon icon="fa-solid fa-trash-can" />&nbsp;&nbsp;
                <span>Remove</span>
            </button>
            )}
            {experience.length - 1 === index && experience.length < 5 && (
            <button
                type="button"
                onClick={handleExperienceAdd}
                className="btn"
            >
                &nbsp;<FontAwesomeIcon icon="fa-solid fa-plus" />&nbsp; 
                <span>Add Experience</span>
            </button>
            )}
        </div>
        </div>
        
    ))}
    </div>
  );
}

export default AddExperience;