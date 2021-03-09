import React, { useState } from 'react';
import Draggable from 'react-draggable';

function Drag(props) {

  let [deltaXyPos, setDeltaXyPos] = useState({ x: 0, y: 0 })

  const eventControl = (event, info) => {
    if (event.type === 'mousemove') { //mousedown, mouseup
      console.log('Event name: ', event.type);
      console.log(event, info);
    }
  }

  const handleDrag = (e, d) => {
    const { x, y } = deltaXyPos;
    setDeltaXyPos({ x: x + d.deltaX, y: y + d.deltaY })

  };

  return (
    <Draggable
      handle=".handle"
      grid={[25, 25]}
      onDrag={handleDrag}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: 'solid black 1px',
          maxWidth: '20%',
        }}
      >
        <div
          className="handle"
          style={{
            display: '',
            height: '2vh',
            backgroundColor: '#5EA9BE',
            fontSize: '10px'
          }}
        >
          Source
        </div>
        <div>
          {deltaXyPos.x.toFixed(0)} {deltaXyPos.y.toFixed(0)}
        </div>
      </div>
    </Draggable>
  );
}

export default Drag;
