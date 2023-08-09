
import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

function UpdateForm() {


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("")

    const params = useParams();

    const navigate = useNavigate();

    useEffect(()=> {
        
        createNote()
    }, [])

    const createNote = async () => {        

        // console.log(params)
        const result = await axios.get(`http://localhost:5000/notes/${params.id}`); 
       
        setTitle(result.data[0].title) 
        setColor(result.data[0].color) 
        setDescription(result.data[0].description) 
            
    };

   


   

  

    const UpdateData = async (event) => {
       
       event.preventDefault()

        const result = await axios.put(`http://localhost:5000/notes/update/${params.id}`, {
            "title": title,
            "description": description,
            "color": color
        })
        console.log(result)     
        navigate("/")
    }


   


  
    return <div>
        <Header/>
        <h1 className="text-center">Update note </h1>

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
          
            <button onClick={UpdateData} className="btn btn-success my-4 p-x btn-lg">Update</button>
        </form>
        </div>
    </div>
}

export default UpdateForm;