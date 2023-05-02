
import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Form() {


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("")

    const navigate = useNavigate();


    const createNote = (event) => {
        event.preventDefault();

        axios.post("http://localhost:5000/register", {
            title: title,
            description: description,
            color: color
        }).then(response => {
            navigate("/")

        }).catch(error => {
            console.log(error);
        })       
    }


   


  
    return <div>
        <Header/>
        <h1 className="text-center">Add note </h1>

      <div className="row">

        <form  className="form-control p-4 w-25">
            <label>Enter title</label>
            <input type="text" className="form-control"  value={title}

            onChange={event => {
                setTitle(event.target.value);
            }}

             
            ></input>
       
            <label className="my-4">Enter Description</label>
            <input type="text" className="form-control"
            
            value={description}

            onChange={event => {
                setDescription(event.target.value);
            }}
            ></input>

            <label className="my-4">Pick color</label><br/>
            <input type="color" 
            value={color}
            
            onChange={event => {
                setColor(event.target.value);
            }}
            ></input><br/>
          
            <button onClick={createNote} className="btn btn-success my-4 p-x btn-lg">Save</button>
        </form>
        </div>
    </div>
}

export default Form;