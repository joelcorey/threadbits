import React from 'react';
import './App.css';

import Button from './component/stitches/button/button';
import Wrapper from './component/stitches/wrapper/wrapper';
import Menubar from './component/Menubar/Menubar';
import Drag from './component/Drag/Drag';

function App() {

  return (
    <Wrapper>
      <Menubar />
      <Button onClick={() => {alert('hello!')}}>hi</Button>
      <Drag />
    </Wrapper>
  );
}

export default App;
