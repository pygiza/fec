import React from 'react';

// load more answers/questions
var Load = ({ colap, setColap, name, className }) => {

  function more() {
    setColap(!colap)
  }
  return (
    <button className={className} onClick={more}>{colap ? 'Show less': 'Show more ' + name}</button>
  );
}

export default Load;