import React, {useState} from "react";
import ExperienceData from '../Data/ExperienceData';
import Experience from './Experience';

import './Experience.scss'

const ExperienceList = ({date, text, position}) => {

    const [data, setData] = useState(ExperienceData);

    


  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">


      {
          data.map((item, index) => {
             if(index % 2 === 0){
              return <Experience date={item.date} text={item.text} key={index} position='right'/>
            }else{
              
              return <Experience date={item.date} text={item.text} key={index} position='left'/>
            }
          })
      }
      
       
        
    </div>
    </div>
  )
}

export default ExperienceList;
