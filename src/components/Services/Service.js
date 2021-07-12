import React from 'react';




const Service = ({title, description, icon}) => {
    return (
        <React.Fragment>
        <div className="col-md-3 col-sm-6">
        <div className="box">
          <div className="circle"><i className={icon}></i></div>

          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      </React.Fragment>
    )
}

export default Service
