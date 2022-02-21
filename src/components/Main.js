import React from "react";
import { useState } from "react";
import Name from './cv_components/Name';
import Title from './cv_components/Title';
import Address from './cv_components/Address';
import Phone from './cv_components/phone';
import Email from './cv_components/Mail';
import Linkedin from './cv_components/Linkedin';
import Description from './cv_components/Description';
import Photo from './cv_components/Photo';
import Position from './cv_components/Position';
import Company from './cv_components/Company';
import JobDesc from './cv_components/JobDesc';
import StartDate from './cv_components/Start';
import EndDate from './cv_components/End';
import Skill from './cv_components/Skill';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
library.add(faBriefcase, faGraduationCap, faPenRuler, faPlus, faTrashCan, faXmark);

function Main(){
  let skillIndex=0;

  const [userData, setUserData] = useState([{ photo: "", 
                                            fullName:"", 
                                            title:"", 
                                            address:"", 
                                            phone:"", 
                                            email:"", 
                                            linkedin:"", 
                                            description:""
                                          }]); 

  const [experience, setExperience] = useState([{ position: "", 
                                                  company:"", 
                                                  jobDesc:"", 
                                                  start:"", 
                                                  end:""
                                                }]);

  const [education, setEducation] = useState([{ name: "", 
                                              degree:"", 
                                              note:"",
                                              start:"", 
                                              end:""
                                            }]);
                                            
  const [skills, setSkills] = useState([{skill:""}]);                                            

  const handleSkillChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...skills];
    list[index][name] = value;
    setSkills(list);
  };

  const handleSkillRemove = (index) => {
    const list = [...skills];
    if(list.length !==1){
        list.splice(index, 1);
        setSkills(list);
    }
  };

  const handleSkillAdd = () => {
    setSkills([...skills, { skill:""}]);
  };
  
  const handleExpChange = (e, index) => {
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

  const handleEduChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...education];
    list[index][name] = value;
    setEducation(list);
  };

  const handleEducationRemove = (index) => {
    const list = [...education];
    if(list.length !==1){
        list.splice(index, 1);
        setEducation(list);
    }
  };

  const handleEducationAdd = () => {
    setEducation([...education, { name: "", degree:"", note:"", start:"", end:""}]);
  };
                                              
  const onImageChange = (e,index) =>{
    if (e.target.files && e.target.files[0]) {
      const {name} = e.target;
      const list = [...userData];
      list[index][name] = URL.createObjectURL(e.target.files[0])
      setUserData(list);
    }
    
  }

  const handleChange = (e,index) => {
    const { id, value } = e.target;
    const list = [...userData];
    list[index][id]= value;
    setUserData(list);
  };

  return (
  <div className="Main">
    <div className='subtit'>Personal Details:</div>
    <div className='topPage'>
      <div className="right"><Photo src={userData[0].photo} handleChange={(e) => onImageChange(e,0)}/></div>
      <div className="center">
        <Name value={userData[0].fullName} handleChange={(e) => handleChange(e,0)}/>
        <Title value={userData[0].title} handleChange={(e) => handleChange(e,0)}/>
        <Description value={userData[0].description} handleChange={(e) => handleChange(e,0)}/>
      </div>  
      <div className="left">
        <Address value={userData[0].address} handleChange={(e) => handleChange(e,0)}/>
        <Phone value={userData[0].phone} handleChange={(e) => handleChange(e,0)}/>
        <Email value={userData[0].email} handleChange={(e) => handleChange(e,0)}/>
        <Linkedin value={userData[0].linkedin} handleChange={(e) => handleChange(e,0)}/>
      </div>
    </div>
    <div className="addExp">
      <div className='subtit'><FontAwesomeIcon icon="fa-solid fa-briefcase" /> &nbsp;&nbsp;Experience:</div><hr/>
      <div className="singleExperience">
        {experience.map((singleExp, index) => (
          <div key={index} className="experience">
            <div className="center">
              <Position value = {singleExp.position} handleExpChange = {(e) => handleExpChange(e, index)}/>
              <Company value = {singleExp.company} handleExpChange = {(e) => handleExpChange(e, index)}/>
              <JobDesc value = {singleExp.jobDesc} handleExpChange = {(e) => handleExpChange(e, index)}/>
            </div>
            <div className="left">
              <StartDate value = {singleExp.start} handleExpChange = {(e) => handleExpChange(e, index)}/>
              <EndDate value = {singleExp.end} handleExpChange = {(e) => handleExpChange(e, index)}/>
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
    </div>
    <div className="addEducation">
      <div className='subtit'><FontAwesomeIcon icon="fa-solid fa-graduation-cap" /> &nbsp;Education:</div><hr/>
      <div className="singleEducation">
        {education.map((singleEducation, index) => (
          <div key={index} className="education">
            <div className="center">
              <Position value = {singleEducation.name} part = "education" handleExpChange = {(e) => handleEduChange(e, index)}/>
              <Company value = {singleEducation.degree} part = "education" handleExpChange = {(e) => handleEduChange(e, index)}/>
              <JobDesc value = {singleEducation.note} part = "education" handleExpChange = {(e) => handleEduChange(e, index)}/>
            </div>
            <div className="left">
              <StartDate value = {singleEducation.start} handleExpChange = {(e) => handleEduChange(e, index)}/>
              <EndDate value = {singleEducation.end} handleExpChange = {(e) => handleEduChange(e, index)}/>
              {education.length !== 0 && (
              <button
                type="button"
                onClick={() => handleEducationRemove(index)}
                className="removeBtn"
              >
                &nbsp;<FontAwesomeIcon icon="fa-solid fa-trash-can" />&nbsp;&nbsp;
                <span>Remove</span>
              </button>
              )}
              {education.length - 1 === index && education.length < 5 && (
              <button
                type="button"
                onClick={handleEducationAdd}
                className="btn"
              >
                &nbsp;<FontAwesomeIcon icon="fa-solid fa-plus" />&nbsp; 
                <span>Add Education</span>
              </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>   
    <div className="addSkills">
      <div className='subtit'><FontAwesomeIcon icon="fa-solid fa-pen-ruler" /> &nbsp;&nbsp;Skills:</div><hr/>
      {skills.map((singleSkill, index) => (
        <div key={index} className="skill">
          {skills.length-1 === index &&(
            <div className="skills">
              <div className="center">
                <Skill value = {singleSkill.skill} handleSkillChange = {(e) => handleSkillChange(e, index)}/>
              </div>
              <div className="left">
                <button
                  type="button"
                  onClick={handleSkillAdd}
                  className="btn"
                >
                  &nbsp;<FontAwesomeIcon icon="fa-solid fa-plus" />&nbsp; 
                  <span>Add Skill</span>&nbsp;&nbsp;&nbsp;
                </button>
              </div>
            </div> 
          )}
        </div>
      ))}
      <div className="output">
        {skills &&
          skills.map((singleSkill, index) => (
            <ul key={index}>
              {singleSkill.skill && skills.length>index+1 && <li>
                {singleSkill.skill}&nbsp;
                  {skills.length !== 0 && ( 
                    <button
                      type="button"
                      onClick={() => handleSkillRemove(index)}
                      className="removeBtn2"
                    >
                      <FontAwesomeIcon icon="fa-solid fa-xmark" />
                    </button>
                  )}
                </li>}
            </ul>
          ))}
      </div>
    </div>     
  </div>
);}

export default Main;
