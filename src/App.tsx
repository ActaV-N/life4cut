import styled from '@emotion/styled';
import React from 'react';
import Frame from './components/frame';
import Uploader from './components/uploader';
import usePhoto from './hooks/usePhoto';

const StyledAppContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  justify-items:center;
  align-items:center;

  width:100%;
  height:100%;
`

function App() {
  const { photos, setPhotoInformation } = usePhoto();

  return (
    <StyledAppContainer>
      <Frame/>
      <Uploader photos={photos} setPhotoInformation={setPhotoInformation} />
    </StyledAppContainer>
  );
}

export default App;
