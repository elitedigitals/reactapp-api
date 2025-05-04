
const Button = ({handleclick, title}) => {

   

 
    return (  
        <div>
            <div className="button">
                <button style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "10px 10px",
                    
                }} onClick={handleclick}> 
                {title}
                
                </button>
            </div>
        
        
    </div>
    );
}
 
export default Button;