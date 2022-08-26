import styled from '@emotion/styled';
import React from 'react';
import Frame from './components/frame';
import Uploader from './components/uploader';

const StyledAppContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  justify-items:center;
  align-items:center;

  width:100%;
  height:100%;
`

function App() {
  return (
    <StyledAppContainer>
      <Frame/>
      <Uploader/>
    </StyledAppContainer>
  );
}

export default App;
