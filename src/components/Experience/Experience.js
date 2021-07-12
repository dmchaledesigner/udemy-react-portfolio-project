import React from 'react'

const Experience = ({date, text, position}) => {
    return (
        <React.Fragment>

            <div className={`timeline-block timeline-block-${position}`}>
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>{date}</h3>
            <p>{text}</p>
          </div>
        </div>



        </React.Fragment>
    )
}

export default Experience
