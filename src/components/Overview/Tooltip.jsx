import React from 'react';

const Tooltip = ({ x, y, content }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        padding: '5px',
        borderRadius: '5px',
        pointerEvents: 'none',
      }}
    >
      {content}
    </div>
  );
};

export default Tooltip;
