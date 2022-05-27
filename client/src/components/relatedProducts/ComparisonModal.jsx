import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  display: ${props => props.display};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`

const ModalContent = styled.div`
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  width: 80%
`

const handleModalClick = function(e, close) {
  if (e.target.id === 'comparisonModal') {
    close();
  }
}

const ComparisonModal = function({ display='hidden', close, product={ name: '', features: [] }, compare={ name: '', features: [] } }) {
  return (
    <Modal id='comparisonModal' display={display} onClick={(e) => handleModalClick(e, close)}>
      <ModalContent>
        <button onClick={close}>Close Modal</button>
        <table>
          <thead>
            <th>{product.name}</th>
            <th>Features</th>
            <th>{compare.name}</th>
          </thead>
          <tbody>
            {product.features.map((feature) => {
              return (
                <tr>
                  <td>{feature.value}</td>
                  <td>{feature.feature}</td>
                </tr>
                )
            })}
          </tbody>
        </table>
      </ModalContent>
    </Modal>
  )
}

export default ComparisonModal;