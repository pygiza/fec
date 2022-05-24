import React from 'react';
import styled from 'styled-components';

function Footer({ products }) {
  return (
    <FooterBox>
      <FooterSlogan>
          {products.slogan}
      </FooterSlogan>
      <FooterDesc>
          {products.description}
      </FooterDesc>
    </FooterBox>
  );
}

const FooterBox = styled.div`
display: grid;
grid-gap: 0.25rem;
grid-template-columns: repeat(2, minmax(0,1fr));
grid-template-rows: 1fr;
grid-column: 3 /11;
grid-row: 11 / 13;
`;
// border-top: solid;
// border-color: #FFD24C;
//background: #FFD24C;

const FooterDesc = styled.p`
grid-column: 2;
text-align: center;
`;

const FooterSlogan = styled.p`
border-right: solid;
border-color: black;
grid-column: 1;
text-align: center;
`;

export default Footer;
