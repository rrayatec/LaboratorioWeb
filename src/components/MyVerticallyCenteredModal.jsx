import { Button, Modal } from "react-bootstrap";
import TodoList from "../components/todo/TodoList";

export default function MyVerticallyCenteredModal(props) {

  return (
    <Modal      
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Carrito de Compras
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <TodoList props={props} todos={props.todos} deleteTodo={props.deleteTodo} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
