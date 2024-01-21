import { useState } from "react";

export function CreateTodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    return (
        <div>
            <input onChange={(e) => {
                const value = e.target.value;
                setTitle(e.target.value);
            }} type="text" placeholder="title"></input> <br></br>


            <input onChange={(e) => {
                const value = e.target.value;
                setDescription(e.target.value);
            }} type="text" placeholder="description"></input> <br></br>

            <button onClick={() => {
                fetch('http://localhost:3000/todo', {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }), 
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(async (res) => {
                    const json = await res.json();
                    alert("Todo Added, Prashant!")
                })
            }}>Add Todo</button><br></br>

        </div>
    )
}

