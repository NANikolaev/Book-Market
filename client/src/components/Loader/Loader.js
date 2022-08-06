import "./Loader.css"
import {Spinner} from "reactstrap"

function Loader(){
    return (
        <div className="spinner">
            <Spinner>Loading...</Spinner>
        </div>
    )
    
}

export default Loader