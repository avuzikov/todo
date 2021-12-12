import { useRef, useState } from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useSelector } from "react-redux";

const AddTodo = () => {
  const uid = useSelector((state) => {
    return state.auth.localId;
  });
  const idToken = useSelector((state) => {
    return state.auth.idToken;
  });

  const taskRef = useRef("");
  const [taskType, setTaskType] = useState("other");

  const updateTaskType = (event) => {
    setTaskType(event.target.value);
  };

  async function submitHandler(event) {
    event.preventDefault();
    const value = taskRef.current.value;
    if (value === "") {
      return;
    }
    try {
      const response = await fetch(
        `https://todo-6ba5c-default-rtdb.firebaseio.com/todos/${uid}.json?auth=${idToken}`,
        {
          method: "POST",
          body: JSON.stringify({ value: value, type: taskType }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const idTask = await response.json();
      console.log("Task ID:", idTask.name);
    } catch (err) {
      console.log("Something went wrong");
      console.log(err);
    }
    taskRef.current.value = "";
    setTaskType("other");
  }

  return (
    <Card className={classes.card}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="newTask">New Task</label>
          <input type="text" id="newTask" ref={taskRef} />
        </div>
        <div className={classes.control}>
          <label>Choose category</label>
          <select
            value={taskType}
            onChange={updateTaskType}
            className={classes[`${taskType}`]}
          >
            <option value="work" className={classes.work}>
              work
            </option>
            <option value="study" className={classes.study}>
              study
            </option>
            <option value="personal" className={classes.personal}>
              personal
            </option>
            <option value="other" className={classes.other}>
              other
            </option>
          </select>
        </div>
        <Button className={classes.button}>Add Task</Button>
      </form>
    </Card>
  );
};

export default AddTodo;
