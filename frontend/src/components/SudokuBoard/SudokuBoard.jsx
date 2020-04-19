import React from 'react';
import './SudokuBoard.css';

const SudokuBoard = ({ board, currentCell, setCurrentCell }) => (
    <table>
        <tbody>
            {board.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((col, colIndex) => (
                        <td
                            id={
                                rowIndex === currentCell[0] &&
                                colIndex === currentCell[1]
                                    ? 'selected'
                                    : ''
                            }
                            key={colIndex}
                            onClick={() => setCurrentCell([rowIndex, colIndex])}
                        >
                            {col}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

export default SudokuBoard;
