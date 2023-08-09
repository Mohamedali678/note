import { React, useEffect, useState } from "react";
import Header from "./Header";
import {AiTwotoneDelete} from "react-icons/ai";
import {AiFillEdit} from "react-icons/ai"
import axios from "axios";
import { Link } from "react-router-dom";



function Main(){


    const [notes, setNotes]  = useState([]);


    useEffect(() => {
        getAllNotes();
    }, [])


    const getAllNotes = ()=> {

        axios.get("http://localhost:5000/notes").then(response => {
          setNotes(response.data);
        }).catch(error => {
            console.log(error);
        })

    }



    const deleteNote = (id) => {
        axios.delete(`http://localhost:5000/delete/${id}`).then(response => {
            console.log(response.data);
            alert("Note deleted")
            getAllNotes();
        }).catch(error => {
            console.log(error);
        })
    }


    return <div>
        <Header/>
       
       <div className="container">

        {
            notes.map((index) => (
            <div className="box1" style={{backgroundColor: index.color}}>
                <h3>{index.title}</h3>
                <p>{index.description}</p>
               
                <div className="action">
                <p>{new Date(index.createdAt).toDateString()}</p>

                <button onClick={() => deleteNote(index._id)} className="btn"><AiTwotoneDelete/></button>
                <Link to={"/update/" + index._id} className="btn"> <AiFillEdit /> </Link>

                </div>
            </div>

            ))
        }
    


       


       </div>


    
    </div>
}

export default Main;