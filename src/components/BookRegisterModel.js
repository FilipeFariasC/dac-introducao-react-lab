import {useState} from "react";




export function BookRegisterModel(props){
    const [title, setTitle] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [genre, setGenre] = useState("");

    function registerBook(){
        console.log("Title: "+title);
        console.log("Author: "+authorName);
        console.log("Genre: "+genre);
    }


    return (
        <div className="form-wrapper">
            <header>
                <h2 className="title">Book Register</h2>
            </header>

            <form className="form book-form" 
            onSubmit={(event)=>{
                event.preventDefault();
                registerBook();
            }}>
                <div className="model-wrapper">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                </div>
                <div className="model-wrapper">
                    <label htmlFor="author">Author</label>
                    <input type="text" className="form-control" id="author" placeholder="Author" value={authorName} onChange={(event) => setAuthorName(event.target.value)}/>
                </div>
                <div className="model-wrapper">
                    <label htmlFor="genre">Genre</label>
                    <input type="text" className="form-control" id="genre" placeholder="Genre" value={genre} onChange={(event) => setGenre(event.target.value)}/>
                </div>
                <div className="model-wrapper">
                    <button type="submit" className="form-control" id="submit" >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )

}