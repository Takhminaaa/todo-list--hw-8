import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalUi = ({ onClose, onDeleteItem }) => {
  return createPortal(
    <StyledModalContainer onClick={onClose}>
      <WrapperContent onClick={(e) => e.stopPropagation()}>
        <h2>Вы точно хотите удалить?</h2>
        <StyledContainerBtn>
          <StyledButton onClick={onDeleteItem}>Yes</StyledButton>
          <StyledButton onClick={onClose}>No</StyledButton>
        </StyledContainerBtn>
      </WrapperContent>
    </StyledModalContainer>,
    document.getElementById("modal")
  );
};

export default ModalUi;

const WrapperContent = styled.div`
  padding: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 14px;
`;

const StyledModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #6666666f;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin-top: 0;
  margin-left: 0;
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

const StyledContainerBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
