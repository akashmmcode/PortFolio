import React from "react";
import './TechStackComponent.css'
import { RiHtml5Line } from "react-icons/ri";




const TechStackComponent = (props)=>{
    console.log(props);
    return(
        <div className="tech">
            <RiHtml5Line className="html"/>
        </div>
    )
}

export default TechStackComponent;