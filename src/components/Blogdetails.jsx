import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../useFetch";
import '../index.css'

const BlogDetails = () => {


    const {id} = useParams()
    const {data, loading, error} =useFetch('https://jsonplaceholder.typicode.com/posts/' + id);
    return ( 
        <div className="blog-details">
            {loading && <div className="loading">Loading...</div>}
            {error && <div className="loading">Could not fetch data at the moment</div> }
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;