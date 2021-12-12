import React from "react";
import classes from "./TodoList.module.css";
import Card from "../UI/Card";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const tasks = [
    { id: "1", value: "Example work task", type: "work" },
    { id: "2", value: "Example study task", type: "study" },
  ];
  if (tasks.length === 0) {
    return (
      <Card className={classes.card}>
        <h2 className="tasks__fallback">Found no tasks</h2>
      </Card>
    );
  }
  return (
    <Card className={classes.card}>
      <ul className={classes.list}>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task.value} type={task.type} />
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
