import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
// add a answer/question
let Ad = styled.button`
  border: yellow;
  background-color: inherit;
  float: left;
  font-size: 15px;
  text-decoration: underline;
  &:hover {
    color: orange;
  }
`;
let Modal = styled.div`
  display: ${props => props.show.display};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-image: url("https://www.solidbackgrounds.com/images/website/950x534/950x534-blue-abstract-noise-free-website-background-image.jpg");
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
function handleSubmit(event, id, update) {

  axios({
    url: `http://localhost:3000/qa/questions/${id}/answers`,
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
}
var Add = (props) => {
  const [id, setId] = useState(0);
  const [pop, setPop] = useState(false);

  return (
    <div>
      <Ad onClick={function(event) { Modal.defaultProps.show = show; setId(props.id.question_id)}}>Add answer</Ad>
      <Modal id='modal' onClick={function(event) {if(event.target.id === 'modal') { Modal.defaultProps.show = hide; PopUp.defaultProps.show = popHide; setId(0);}}}>
        <ModalContent>
        <PopUp>
          <span>Invaled email, please try again!</span>
        </PopUp>
          <h3>Submit your Answer</h3>
          <form onSubmit={function(event) {
            event.preventDefault();
            if (event.target[2].value.includes('@') && event.target[2].value.includes('.com')) {
              Modal.defaultProps.show = hide;
              PopUp.defaultProps.show = popHide;
              handleSubmit(event, id, props.setData);
            } else {
              PopUp.defaultProps.show = pop;
              setPop(true);
            }
          }}>
            <label>Your Answer:</label>
            <Answer cols="100" rows="10" maxlength='1000' required></Answer>
            <label>Your nickname: </label>
            <Name type='text' placeholder='Example: jackson11!' required></Name>
            <Lonly>For privacy reasons, do not use your full name or email address!</Lonly>
            <label>Your email: </label>
            <Email type='text' placeholder='Example: jack@email.com' required></Email>
            <input type='button' value='to be implemented: Add photo'></input>
            <Close type='submit'></Close>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Add;