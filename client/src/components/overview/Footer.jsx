import React from 'react';
import styled from 'styled-components';

function Footer({ products }) {
  return (
    <FooterBox>
      <FooterDesc>
          {products.description}
      </FooterDesc>
      <FooterSlogan>
          {products.slogan}
      </FooterSlogan>
    </FooterBox>
  );
}

const FooterBox = styled.div`
display: grid;
grid-gap: 0.25rem;
grid-template-columns: 60% 1fr;
grid-template-rows: 20% 1fr;
grid-column: 3 /11;
grid-row: 11 / 13;
`;

const FooterDesc = styled.p`
grid-column: 1;
grid-row: 2;
border-right: solid;
border-color: black;
text-align: center;
margin-right: .75em
`;

const FooterSlogan = styled.p`
grid-column: 2;
grid-row: 2;
margin-left: .75em
`;
//text-align: center;

export default Footer;
