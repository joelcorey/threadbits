import * as d3 from 'd3';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import Button from './component/stitches/button/button';
import Wrapper from './component/stitches/wrapper/wrapper';
import Menubar from './component/Menubar/Menubar';
import Drag from './component/Drag/Drag';

function App() {

  let [dimensions, setDimensions] = useState({})
  const ref = useRef();

  function getDimensions() {
    let body = document.querySelector('html');
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    getDimensions();
    window.addEventListener('resize', getDimensions);
  }, [])

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .style("border", "1px solid black")
  }, [dimensions])

  return (
    <Wrapper>
      <div style={{
          position: 'fixed',
          // backgroundColor: 'pink',
          // top: 0,
          zIndex: 1
        }}
      >
        <svg ref={ref} />
      </div>

      <div style={{zIndex: 10}}>
        <Menubar />
        <Button onClick={() => {alert('hello!')}}>hi</Button>
        <p>{dimensions.width} {dimensions.height}</p>
        <Drag />
      </div>
    </Wrapper>
  );
}

export default App;
