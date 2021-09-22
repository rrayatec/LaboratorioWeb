import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { Container, Navbar, Nav, Col, NavDropdown, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Sandwiches from "./routers/SandwichesRouters";
import MyOffSet from "./components/MyOffSet";
import Loading from "./components/Loading";
import MyVerticallyCenteredModal from "./components/MyVerticallyCenteredModal";

import MyButton from "./components/MyButton";
//todo
import useTodoState from "./functions/useTodoState";
import TodoForm from "./components/todo/TodoForm";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [btnActivo, setBtnActivo] = useState("Cargando");
  const [mnsActivo, setMnsActivo] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [nombres, setNombres] = useState([]);

  const [open, setOpen] = React.useState(false);

  //todo
  const { todos, addTodo, deleteTodo, addSingleTodo } = useTodoState([]);

  const handleSelect = () => {
    setModalShow(true);
  };

  const handleSelectFromButton = (props) => {
    console.log(props.target.id);
    setBtnActivo(props.target.id);
    setModalShow(true);
  };

  const handleClick = (props) => {
    setMnsActivo(props);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setNombres(res.data);
      addTodo([...todos, res.data]);
    });
  }, []);

  return (
    <Router>
      <Navbar
        style={{ paddingLeft: 20, paddingRight: 20 }}
        sticky="top"
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand="md"
      >
        <LinkContainer to="/tacos">
          <Navbar.Brand>
            {" "}
            <img
              alt=""
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            SAI
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/tacos">
              <Nav.Link>Tacos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sandwiches">
              <Nav.Link>Sandwiches</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sandwiches">
              <Nav.Link>{btnActivo}</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => handleShow()}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleSelect()}>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <MyButton
            todos={todos}
            _handleSelectFromButton={(a) => handleSelectFromButton(a)}
          />
        </Navbar.Collapse>
      </Navbar>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        todos={todos}
        deleteTodo={deleteTodo}
        _handleClick={(a) => handleClick(a)}
      />
      <MyOffSet
        show={show}
        onHide={() => setShow(false)}
        todos={todos}
        deleteTodo={deleteTodo}
        _handleClick={(a) => handleClick(a)}
      />

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={mnsActivo}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              Deleted
            </Button>
          </React.Fragment>
        }
      />

      <Switch>
        <Route path={"/tacos"}>
          {todos.length === 0 || todos.length === null ? (
            <Loading />
          ) : (
            <Container style={{ padding: 30 }}>
              <TodoForm
                addSingleTodo={(todoText) => {
                  const trimmedText = todoText.name.trim();

                  if (trimmedText.length > 0) {
                    addSingleTodo(todoText);
                  }
                }}
              />
            </Container>
          )}
        </Route>
        <Route path={"/sandwiches"}>
          {nombres.length === 0 || nombres.length === null ? (
            <Loading />
          ) : (
            <Container style={{ padding: 20 }}>
              <Row>
                <Col></Col>
                <Col>
                  <Sandwiches data={nombres} />
                </Col>
                <Col></Col>
              </Row>
            </Container>
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
