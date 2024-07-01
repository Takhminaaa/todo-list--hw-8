import React from "react";
import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import ModalUi from "./modalExemple/ModalUi";

const TodoList = () => {
  const inputRef = useRef();
  const [todo, setTodo] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [todoId, setTodoId] = useState(null);
  console.log("todoId: ", todoId);

  console.log(todo);

  function handleUpdateTodo(id) {
    const currentFind = todo.find((item) => item.id === todoId);

    setTodoId(currentFind.title);
  }

  function handleDaleteValue() {
    setTodo(todo.filter((e) => e.id !== todoId));
    closeModal();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) {
      alert("Enter please!");
      return;
    }

    const newValue = {
      title: inputRef.current.value,
      id: Date.now(),
    };

    setTodo([...todo, newValue]);
    inputRef.current.value = "";
  };

  const openModalHandler = (itemId) => {
    setShowModal(true);
    setTodoId(itemId);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <WrapperFormBtn>
      <StyledText>TODO-LIST</StyledText>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Enter new todo..."
          name="userPassword"
          ref={inputRef}
        />
        <StyledButton>ADD</StyledButton>
      </StyledForm>

      <StyledList>
        {todo.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <ContainerButton>
              <StyledButton onClick={handleUpdateTodo}>UPDATE</StyledButton>
              <StyledButton onClick={() => openModalHandler(item.id)}>
                DELETE
              </StyledButton>
            </ContainerButton>
          </li>
        ))}
      </StyledList>

      {showModal && (
        <ModalUi
          onClose={closeModal}
          onDeleteItem={handleDaleteValue}
        ></ModalUi>
      )}
    </WrapperFormBtn>
  );
};

export default TodoList;

const WrapperFormBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;

  gap: 30px;
`;

const StyledInput = styled.input`
  width: 500px;
  height: 44px;
  border-radius: 12px;
  border: 2px solid #275938;
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background-color: #275938;
  color: white;
  font-weight: 700;
  font-size: 18px;
  border: 2px solid white;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    width: 700px;
    height: 55px;
    background-color: white;
    padding: 10px;
    color: #275938;
    font-size: 600;
  }
`;
const ContainerButton = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledText = styled.h1`
  color: #275938;
  text-align: center;
`;
