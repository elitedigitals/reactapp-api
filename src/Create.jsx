import { useState } from "react";

const Create = () => {

    const [title, setTitle]= useState("");
    const [body, setBody]= useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()

        const blog ={title, body}

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added")
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text"
                required 
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog Title</label>
                <textarea required
                    value={body}
                    onChange={(e) =>setBody(e.target.value)}
                ></textarea>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;