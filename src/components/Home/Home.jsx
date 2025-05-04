import Card from '../card/card';
import useFetch from '../../useFetch'
import '../../index.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Home = () => {

    const {data, loading, } = useFetch('https://jsonplaceholder.typicode.com/posts')
    // console.log('data', data);
  
   
if (loading) {
    return(
      <div className='loading'>loading....</div>
    )
  }  

    return ( 
        <div className='card-section' >
       
            {data.map((data)=>(  
                <Link to={`/blog/${data.id}`}>
                    <Card
                        keys={data.id}
                        title={data.title}
                        description={data.body}
                    />
                </Link>
            ))}
        </div>
    );
}
 
export default Home;