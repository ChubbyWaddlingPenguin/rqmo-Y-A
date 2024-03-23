import React from 'react';
import BestButton from '../../components/BestButton';

const InstructionsView = () => {
  return (
    <div>
      <h2>Instructions</h2>
      <textarea
        style={{
          width: '100%',
          height: '200px',
          resize: 'none',
          overflowY: 'auto',
        }}
        readOnly={true}
        defaultValue="Instructions super long blah blah testing blah blah Instructions super long blah blah testing blah blah Instructions super long blah blah testing blah blah Instructions super long blah blah testing blah blah Instructions super long blah blah testing blah blah Instructions super long blah blah testing blah blah Instructions super long blah blah testing blah blah Instructions super long blah blah testing blah blah Instructions super long blah blah testing blah blah Instructions super long blah blah testing blah blah Instructions super long blah blah testing blah blah "
      />
      <BestButton>Got it!</BestButton>
    </div>
  );
};

export default InstructionsView;