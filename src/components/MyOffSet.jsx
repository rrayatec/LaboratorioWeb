import { Offcanvas } from "react-bootstrap";
import TodoList from "../components/todo/TodoList";

export default function MyOffSet(props) {
  return (
    <Offcanvas show={props.show} onHide={props.onHide} placement={"bottom"}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <TodoList props={props} todos={props.todos} deleteTodo={props.deleteTodo} />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
