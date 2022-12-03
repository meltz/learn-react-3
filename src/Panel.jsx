import React from 'react';

const Panel = ({ title, children, isActive, onShow }) => {
  return (
    <div>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>SHOW</button>}
    </div>
  );
};

export default Panel;
