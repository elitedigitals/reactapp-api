import '../../index.css'

const Card = ({title, description}) => {
    return ( 
        <div className="card">
            <h3 className='title-text'>{title}</h3>
            <p className='body-text'>{description}</p>
        </div>
     );
}
 
export default Card;