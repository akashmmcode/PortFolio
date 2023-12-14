import scrollimage from "../../src/assets/tape_scroll.png"
import "./ScrollImageComponent.css";



const ScrollImageComponent = ()=>{
    return(
        <div className="upside-down-text">
        <img src={scrollimage}></img>
      </div>
    )
}

export default ScrollImageComponent;