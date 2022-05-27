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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  width: 80%
`

const FeaturesTable = styled.table`
  width: 100%;
  background-color: #99B3E8;
  font-family: sans-serif;
  font-size: 20px;
  `

const Head = styled.th`
  width: 33%;
  background-color: white;
  font-size: 22px;
`

const Row = styled.tr`
  width: 33%
  border: 10px solid;
`

const Data = styled.td`
  background-color: white;
  text-align: center;
  padding: 4px;
`


const handleModalClick = function(e, close) {
  if (e.target.id === 'comparisonModal') {
    close();
  }
}

const combineFeatures = function(features1, features2) {
  let combinedFeatures = [];
  let prevFeatures = [];

  features1.forEach(feature1 => {
    let bothFeaturesNotExist = true;
    let value1 = feature1.value === null ? 'check' : feature1.value;
    for (let feature2 of features2) {
      if (features2.feature === feature1.feature) {
        let value2 = feature2.value === null ? 'check' : feature2.value;
        combinedFeatures.push({ feature: feature1.feature, value1, value2})
        bothFeaturesNotExist = false;
        break;
      }
    }

    if (bothFeaturesNotExist) {
      combinedFeatures.push({ feature: feature1.feature, value1: feature1.value, value2: '' });
      bothFeaturesNotExist = true;
    }

    prevFeatures.push(feature1.feature);
  })

  features2.forEach(feature2 => {
    if (prevFeatures.includes(feature2.feature)) {
      return;
    }
    let value2 = feature2.value === null ? '✓' : feature2.value;
    combinedFeatures.push({ feature: feature2.feature, value1: '', value2 })
  })

  return combinedFeatures;
}

const ComparisonModal = function({ display='hidden', close, product={ name: '', features: [] }, compare={ name: '', features: [] } }) {
  let allFeatures = combineFeatures(product.features, compare.features);

  return (
    <Modal id='comparisonModal' display={display} onClick={(e) => handleModalClick(e, close)}>
      <ModalContent>
        <button onClick={close}>Close Modal</button>
        <FeaturesTable>
          <thead>
            <Row>
              <Head>{product.name}</Head>
              <Head>Features</Head>
              <Head>{compare.name}</Head>
            </Row>
          </thead>
          <tbody>
            {allFeatures.map((feature) => {
              return (
                <Row>
                  <Data>{feature.value1}</Data>
                  <Data>{feature.feature}</Data>
                  <Data>{feature.value2}</Data>
                </Row>
                )
            })}
          </tbody>
        </FeaturesTable>
      </ModalContent>
    </Modal>
  )
}

export default ComparisonModal;