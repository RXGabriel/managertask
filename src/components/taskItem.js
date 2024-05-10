import { useEffect } from "react";

const TaskItem = ({ task }) => {
  useEffect(() => {
    console.log("Component was mounted");

    return () => {
      console.log("It will unmount");
    };
  }, []);

  return (
    <>
      <h1>{task.description}</h1>
      <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
    </>
  );
};

export default TaskItem;
