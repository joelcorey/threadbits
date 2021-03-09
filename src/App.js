import React, { useState, useEffect } from 'react';
import './App.css';

import Button from './component/stitches/button/button';
import Wrapper from './component/stitches/wrapper/wrapper';
import Menubar from './component/Menubar/Menubar';
import Drag from './component/Drag/Drag';

function App() {

  let [dimensions, setDimensions] = useState({})

  // function getDimensions() {
  //   let body = document.querySelector('html');
  //   setDimensions({ width: body.clientWidth, height: body.clientHeight });
  // }

  function getDimensions() {
    let body = document.querySelector('html');
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    getDimensions();

    window.addEventListener('resize', getDimensions);
  }, [])

  return (
    <Wrapper>
      <Menubar />
      <Button onClick={() => {alert('hello!')}}>hi</Button>
      <p>{dimensions.width} {dimensions.height}</p>
      <Drag />
    </Wrapper>
  );
}

export default App;
