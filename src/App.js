import { useState } from "react";
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

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default App;
