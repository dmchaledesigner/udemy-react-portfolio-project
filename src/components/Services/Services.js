import React, {useState, useEffect} from 'react';
import data from '../Data/ServicesData';
import Service from './Service';

import './service.scss';



const Services = ({title, description, icon}) => {

        const [items, setItems] = useState(data);
        

    return (


        <React.Fragment>

                <div className="services">
                <h1 className="py-5">my services</h1>
                <div className="container">
                    <div className="row">


               {
                   items.map((item, index) => {
                    return <Service title={item.title} key={index} description={item.description} icon={item.icon}/>
                   })
               }


        </div>
      </div>
    </div>

        </React.Fragment>
    )
}

export default Services
