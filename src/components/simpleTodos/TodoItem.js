import Card from "../UI/Card";
import classes from "./TodoItem.module.css";
import Button from "../UI/Button";

const TodoItem = (props) => {
  return (
    <li>
      <Card className={`${classes.card} ${classes[props.type]}`}>
        <h2>{props.task}</h2>
        <Button>Delete</Button>
      </Card>
    </li>
  );
};

export default TodoItem;
