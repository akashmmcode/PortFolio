import virgil from '../../src/assets/virgil.png'
import './TributeComponent.css'


const TributeComponent = ()=>{
    return(
        <>
            {/* <h2>ING."*QUESTION EVERYTHING TO ME MEANS TO ALWAYS RECONSIDER CONCEPTS. I INTERPRET THIS FLAG AS A VOW TO DECONSTRUCT EVERY CONCEPT POSED IN OUR WAY AND TRY TO FIND IT’S INEFFICIENCIES. QUESTION EVERYTHING MEANS NOT TO [PRE]ACCEPT A CONCEPT WITHOUT QUESTIONING IT FIRST.*</h2> */}
            <img src={virgil} style={{ width: '50%', height: 'auto' }}></img>
        </>
    )
}

export default TributeComponent;