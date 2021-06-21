import Hoc from './hoc'
const ClickCounter = (props) =>{
    const {count, handleClick} = props    
        return(
            <button type="button" onClick={handleClick} > Click here {count}</button>
        )
    
}

export default Hoc(ClickCounter);