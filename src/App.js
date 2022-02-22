import './App.css';
import { useState } from 'react';
import { useRef } from 'react';
import React from 'react';
import format from 'date-fns/format';
import ReactToPrint from 'react-to-print';
import Name from './components/cv_components/Name';
import Title from './components/cv_components/Title';
import Address from './components/cv_components/Address';
import Phone from './components/cv_components/phone';
import Email from './components/cv_components/Mail';
import Linkedin from './components/cv_components/Linkedin';
import Description from './components/cv_components/Description';
import Photo from './components/cv_components/Photo';
import Position from './components/cv_components/Position';
import Company from './components/cv_components/Company';
import JobDesc from './components/cv_components/JobDesc';
import StartDate from './components/cv_components/Start';
import EndDate from './components/cv_components/End';
import Skill from './components/cv_components/Skill';
import Footer from './components/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faPrint} from "@fortawesome/free-solid-svg-icons";
import { faPencil} from "@fortawesome/free-solid-svg-icons";
library.add(faNewspaper, faFilePdf, faBriefcase, faGraduationCap, faPenRuler, faPlus, faTrashCan, faXmark, faLinkedin, faPrint, faPencil);

function App() {
  const componentRef = useRef();
  const [preview, setPreview] = useState(false); 
  const [userData, setUserData] = useState([{ 
    photo: "", 
    fullName:"", 
    title:"", 
    address:"", 
    phone:"", 
    email:"", 
    linkedin:"", 
    description:""
  }]); 

const [experience, setExperience] = useState([{ 
  position: "", 
  company:"", 
  jobDesc:"", 
  start:"", 
  end:""
}]);

const [education, setEducation] = useState([{ 
  name: "", 
  degree:"", 
  note:"",
  start:"", 
  end:""
}]);
  
const [skills, setSkills] = useState([{skill:""}]);                                            

const handleSkillChange = (e, index) => {
  console.log(e.target);
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

  function Preview(){
    if(preview === false){
      setPreview(true);
    }else{
      setPreview(false);
    }
  }

  return <div className="App">
          <div className="header">
            <div>
              <FontAwesomeIcon icon="fa-solid fa-newspaper" />&nbsp; CV Builder
            </div>
            { preview === false && (
              <div className="preview">
                <button className="btnPreview" value={preview} onClick={(e) => Preview()}><FontAwesomeIcon icon="fa-solid fa-file-pdf" />&nbsp;&nbsp;Cv Preview</button>
              </div>
            ) }
            { preview === true && (
              <div className="preview">
                <button className="btnPreview" value={preview} onClick={(e) => Preview()}><FontAwesomeIcon icon="fa-solid fa-pencil" />&nbsp;&nbsp;Update Cv</button>
              </div>
            ) }
          </div>
          { preview === true && (
            <div className='Main'>
              <div className='cv' ref={componentRef} >
                <div className='top_part'>
                  <div className='fullName'>{userData[0].fullName}</div>
                  <div className='Title'>{userData[0].title}</div>
                </div>
                <div className='cvContent'>
                  <div className='rightCv'>
                    <div className='details'>
                      <div className='photoDiv2'>
                        <img className='photoDiv2'src={userData[0].photo} alt={userData[0].fullName}/>
                      </div>
                      <div className='subTitle'>Personal detail:<hr/></div>
                      <div className='leftSide'>
                        <FontAwesomeIcon className="icons" icon="fa-solid fa-map-location-dot" />
                        <div className='info'>{userData[0].address}</div>
                      </div>
                      <div className='leftSide'>
                        <FontAwesomeIcon className="icons" icon="fa-solid fa-phone" />
                        <div className='info'>{userData[0].phone}</div>
                      </div>
                      <div className='leftSide'>
                        <FontAwesomeIcon  className="icons" icon="fa-solid fa-envelope" />
                        <div className='info'>{userData[0].email}</div>
                      </div>
                      <div className='leftSide'>
                        <FontAwesomeIcon className="icons" icon="fab fa-linkedin-in" />
                        <div className='info'>{userData[0].linkedin}</div>
                      </div>
                    </div>
                    <div className='skill'>
                      <div className='subTitle'>Skills:<hr/></div> 
                        {skills &&
                          skills.map((singleSkill, index) => (
                            <ul key={index} className='skillList'>
                              {singleSkill.skill && skills.length>index+1 && 
                              <li className='info'>&nbsp;&nbsp;&nbsp; {singleSkill.skill}</li>}
                            </ul>
                        ))}
                    </div>
                  </div>
                  <div className='leftCv'>
                    <div className='details'>
                      <div className='subTitle'>Description:<hr/></div>
                      <div className='info'>{userData[0].description}</div>
                      <div className='subTitle'>Experience:<hr/></div>
                      {experience &&
                      experience.map((singleExp, index) => (
                        <div key={index} className='singleExp2'>
                          {singleExp.position && 
                          <div className='singleExp2'>
                            <div className='expInfo'>
                              <div className='position'> {singleExp.position},</div>
                              <div className='date'> from : {format(new Date(singleExp.start), 'MM/yyyy')} to : {format(new Date(singleExp.end), 'MM/yyyy')}</div>
                            </div>
                            <div>{singleExp.company}</div>
                            <div className='info'>{singleExp.jobDesc}</div>
                          </div>
                          }
                        </div>
                      ))}
                      <div className='subTitle'>Education:<hr/></div>
                      {education &&
                      education.map((singleEdu, index) => (
                        <div key={index}className='singleExp2'>
                          {singleEdu.degree && 
                          <div className='singleExp2'>
                            <div className='expInfo'>
                              <div className='position'> {singleEdu.degree},</div>
                              <div className='date'> from : {format(new Date(singleEdu.start), 'MM/yyyy')} to : {format(new Date(singleEdu.end), 'MM/yyyy')}</div>
                            </div>
                            <div>{singleEdu.name}</div>
                            <div className='info'>{singleEdu.note}</div>
                          </div>
                          }
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <ReactToPrint
                trigger={() => <button className="btnPrint">&nbsp;&nbsp;Print this out!<FontAwesomeIcon icon="fa-solid fa-print" />&nbsp;</button> }
                content={() => componentRef.current}
              />
            </div>
          ) }
          { preview === false && (
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
              <div className='subtit'><FontAwesomeIcon icon="fa-solid fa-pen-ruler" /> &nbsp;&nbsp;Skills:</div><hr className="hrSkill"/>
              {skills.map((singleSkill, index) => (
                <div key={index} className="skill">
                  {skills.length-1 === index &&(
                    <div className="skills">
                      <div className="center">
                        <Skill value = {singleSkill.skill} handleSkillChange = {(e) => handleSkillChange(e, index)}/>
                      </div>
                      <div className="left">
                        <button type="button" onClick={handleSkillAdd} className="btn">
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
          )}
          <Footer/>
        </div>
}

export default App;
