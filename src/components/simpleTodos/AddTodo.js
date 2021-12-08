import { useRef } from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddTodo = () => {
  const taskRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();
    if (taskRef.current.value === "") {
      return;
    }

    //write correct post response to the database
    /*const response = await fetch('https://react-http-6b4a6.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });*/

    console.log(taskRef.current.value);
  }
  return (
    <Card className={classes.card}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="newTask"></label>
          <input type="text" id="newTask" ref={taskRef} />
        </div>
        <Button className={classes.button}>Add Task</Button>
      </form>
    </Card>
  );
};

export default AddTodo;
