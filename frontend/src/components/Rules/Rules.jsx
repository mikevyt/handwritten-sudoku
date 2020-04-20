import React from 'react';
import './Rules.css';

const Rules = () => (
    <div className="rules">
        <h3>Rules</h3>
        <p>
            Each row, column and sub-grid (3x3) needs to be filled out with the
            numbers 1-9, without repeating any numbers within the row, column or
            sub-grid.
            <br />
            Can you do it?
            <br />
            <br />
            Select a cell on the left and draw in the number below.
        </p>
    </div>
);

export default Rules;
