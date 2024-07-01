import { useState } from "react";

const InputComponent = () => {
  let [task, settask] = useState("");
  let [takelist, settakelist] = useState([]);

  const handletask=(e)=>{
    settask(e.target.value)
  }
  const addtask=()=>{
    settakelist([...takelist,task])
  }
   
  const handledelete=()=>{
    settakelist(takelist-1)
  }
 
  return (
    <div>
      <input className="input" placeholder="Enter  task name" value={task} onChange={handletask}></input>
      <button className="button" onClick={addtask}>ADD</button>
      <button className="delete-button " onClick={handledelete} >delete </button>

     <ul className="todo-list">
    <p className="error-message">
    {
      takelist==("")?
      "please enter a task name"
       : takelist.length>0?
        takelist.map((task)=>(
          <li>name:{task}</li>
         ) )
         :"No tasks found"
      }
    </p>
    </ul>
      
    </div>
  );
};

export default InputComponent;
