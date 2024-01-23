import React, { useEffect, useState } from "react";

const Todo = ({ userId }) => {
  const [tasks, setTasks] = useState([]);

 useEffect(() => {
   const fetchTasks = async () => {
     const response = await fetch(`http://localhost:3000/userid/${userId}`);
     const data = await response.json();
     console.log("Fetched tasks:", data); 
     setTasks(data);
   };

   fetchTasks();
 }, [userId]);

  return (
    <div>
      {Object.values(tasks).map((task, index) => (
        <p key={index}>{task.title}</p>
      ))}
    </div>
  );
};

export default Todo;
