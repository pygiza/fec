import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
// add a answer/question

let Modal = styled.div`
  display: ${props => props.show.display};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  color: black;
  text-align: left;
`;
let ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;
let Close = styled.input`
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  float: right;
`;
let Answer = styled.textarea`
  display: block;
  margin-bottom: 10px;
`;
let Name = styled.input`
  display: block;
  width: 20%;
`;
let Email = styled.input`
  display: block;
  margin-bottom: 10px;
  width: 30%;
`;
let Lonly = styled.label`
  display: block;
  margin-bottom: 10px;
`;
let BigLonly = styled(Lonly)`
  font-size: 28px;
`;
const PopUp = styled.div`
  float: right;
  margin: auto;
  visibility: ${props => props.show.visibility};
  background-color: red;
`;
const Photo = styled.input`

`;
const Empty = styled.div`
  display: none;
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
PopUp.defaultProps = {
  show: {
    visibility: 'hidden'
  }
}
const pop = {
  visibility: 'visible'
}
const popHide = {
  visibility: 'hidden'
}
function handleSubmit(event, tar, value, update) {
  if (value === 'Answer') {
    axios({
      url: `/qa/questions/${tar}/answers`,
      method: 'post',
      data: {
        body: event.target[0].value,
        name: event.target[1].value,
        email: event.target[2].value,
        photos: []
      }
    })
      .then((data) => {
        console.log(data)
        update();
      });
  } else {
    axios({
      url: `/qa/questions`,
      method: 'post',
      data: {
        body: event.target[0].value,
        name: event.target[1].value,
        email: event.target[2].value,
        product_id: tar
      }
    });
  }
}
var Add = ({ value, Id, setData, className }) => {
  const [id, setId] = useState(0);
  const [pop, setPop] = useState(false);
  var Check = (value === 'Answer') ? Photo: Empty;

  return (
    <div>
      <button className={className} onClick={function(event) { Modal.defaultProps.show = show; setId(Id)}}>{`Add ${value}`}</button>
      <Modal id='modal' onClick={function(event) {if(event.target.id === 'modal') { Modal.defaultProps.show = hide; PopUp.defaultProps.show = popHide; setId(0);}}}>
        <ModalContent>
        <PopUp>
          <span>Invaled email, please try again!</span>
        </PopUp>
          <h3>{`Submit your ${value}`}</h3>
          <form id='form1' onSubmit={function(event) {

            if (event.target[2].value.includes('@') && event.target[2].value.includes('.com')) {
              Modal.defaultProps.show = hide;
              PopUp.defaultProps.show = popHide;
              handleSubmit(event, Id, value, setData);
            } else {
              event.preventDefault();
              PopUp.defaultProps.show = pop;
              setPop(true);
            }
          }}>
            <label>{`Your ${value}:`}</label>
            <Answer cols="100" rows="10" maxlength='1000' required></Answer>
            <label>Your nickname: </label>
            <Name type='text' placeholder='Example: jackson11!' required></Name>
            <Lonly>For privacy reasons, do not use your full name or email address!</Lonly>
            <label>Your email: </label>
            <Email type='text' placeholder='Example: jack@email.com' required></Email>
            <Lonly>For authentication reasons, you will not be emailed</Lonly>
            <Check type='button' value='to be implemented: Add photo'></Check>
            <Close type='submit'></Close>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Add;