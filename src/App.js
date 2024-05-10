/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import axios from "axios";
import TaskItem from "./components/taskItem";

const App = () => {
  const [tasks] = useState([
    {
      is: "1",
      description: "Estudar React",
      isCompleted: false,
    },
    {
      id: "2",
      description: "Ler",
      isCompleted: true,
    },
  ]);

  const fetchTask = async () => {
    try {
      const { data } = await axios.get("localhost:8000/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default App;
