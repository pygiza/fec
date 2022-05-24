import React from 'react';
import styled from 'styled-components';
// add a answer/question
const Ad = styled.button`
  border: yellow;
  background-color: inherit;
  float: left;
  font-size: 15px;
  text-decoration: underline;
  &:hover {
    color: orange;
  }
`;
const Modal = styled.div`
  display: ${props => props.show.display};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;
const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;
const Close = styled.input`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
`;
Modal.defaultProps = {
  show: {
    display: 'none'
  }
}
const show = {
  display: 'block'
};
const hide = {
  display: 'none'
};
var Add = (props) => {
  return (
    <div>
      <Ad onClick={function() {Modal.defaultProps.show = show; props.setData();}}>Add answer</Ad>
      <Modal>
        <ModalContent>
          <form>
            <input type='text'></input>
            <Close type='submit' onClick={function() { Modal.defaultProps.show = hide; } } ></Close>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Add;