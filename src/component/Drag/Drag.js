import React from 'react';
import Draggable from 'react-draggable';

function Drag(props) {

  return (
    <Draggable
      handle=".handle"
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
          hi
        </div>
      </div>
    </Draggable>
  );
}

export default Drag;
