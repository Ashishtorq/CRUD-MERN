import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Todo = ({ userId }) => {
    const params = useParams();
  const [tasks, setTasks] = useState([]);
  const [tasks1, setTasks1] = useState([]);


 useEffect(() => {
   const fetchTasks = async () => {
     const response = await fetch(`http://localhost:3000/userid/${params.id}`);
     const data = await response.json();
     console.log("Fetched tasks:", data.todo); 
     setTasks(data.todo);
     setTasks1(data);
   };
 
   fetchTasks();
 }, [userId]);

  return (
    <div>
      <header className="App-header">
        <h1>{tasks1.name}</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(tasks).map((task, index) => (
            <tr key={index}>
              <td>{task.id}</td>
              <td>{task.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
