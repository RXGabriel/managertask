import { useState, useEffect } from "react";
import axios from "axios";
import "./tasks.scss";

const Tasks = () => {
  const [tasks] = useState([]);

  const fetchTask = async () => {
    try {
      const { data } = await axios.get("localhost:8000/tasks");
      // eslint-disable-next-line no-undef
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="tasks-container">
      <h2>Minhas Tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas Tarefas</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <p>{lastTask.description}</p>
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted)
            .map((completedTask) => (
              <p>{completedTask.description}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
