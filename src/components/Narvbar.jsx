import { Link } from "react-router-dom";
import '../index.css'

const Narvbar = () => {
    return (  
        <div className="narvbar">
            <Link to="/"><button>Home </button>   </Link>
            <Link to="/create"><button>Create </button> </Link>
        </div>
    );
}
 
export default Narvbar;