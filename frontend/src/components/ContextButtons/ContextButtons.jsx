import React from 'react';
import './ContextButtons.css';

const ContextButtons = ({ onSave, onReset }) => (
    <div className="context-buttons">
        <button onClick={onReset}>Reset</button>
        <button onClick={onSave}>Save</button>
    </div>
);

export default ContextButtons;
