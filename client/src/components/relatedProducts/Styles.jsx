import styled from 'styled-components';

const Card = styled.div`
  height: 400px;
  width: 250px;
  background-color: white;
  border-radius: 2%;
  transition: box-shadow 0.25s;
  &:hover {
    box-shadow: 3px 3px grey;
  }
  border: 1px solid black;
`

export default Card;