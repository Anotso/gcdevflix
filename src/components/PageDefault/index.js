import React from 'react';
import Menu from '../menu/Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;


function PageDefault({ children }) {
  return (
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  );
}

//A abertura de fechamento de tag HTML sem determinar qual é se chama React.Fragment, com isso evita ter div e outras tags abertas sem necessidade só para receber dentro o código da página

export default PageDefault;