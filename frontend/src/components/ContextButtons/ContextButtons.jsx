import React from 'react';

const ContextButtons = ({ onSave, onReset }) => (
    <div className="context-buttons">
        <button onClick={onSave}>Save</button>
        <button onClick={onReset}>Reset</button>
    </div>
);

export default ContextButtons;
