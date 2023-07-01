import React, {useState} from "react";

const AddTodoForm = () =>{

    const [addTodo, setAddTodo] = useState('');

    return(
        <form className="mt-4">
            <div className="card card-body">
                <div className="form-group">
                    <label >Ajouter un Todo</label>
                    <input className="form-control" value={addTodo} type="text" onChange={(e) => setAddTodo(e.target.value)} />
                    <input className="btn btn-success mt-4" type="submit" value="valider"/>
                </div>
            </div>
        </form>
    )
}

export default AddTodoForm