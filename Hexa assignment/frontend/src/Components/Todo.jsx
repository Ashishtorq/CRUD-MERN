import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Todo = ({ userId }) => {
  const params = useParams();
  const id = params.id;
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(`http://localhost:3000/userid/${id}`);
      const data = await response.json();
      console.log("Fetched tasks Todo:", data.todo);
      console.log("Fetched tasks Data:", data);
      setTasks(data.todo);
      setUsers(data);
    };

    fetchTasks();
  }, [userId]);
 
  return (
    <div>
      <header className="App-header">
        <h1>{users.name}</h1>
        <h1>{users.id}</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.completed ? "true" : "false"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
