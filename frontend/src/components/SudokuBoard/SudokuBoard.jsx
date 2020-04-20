import React from 'react';
import './SudokuBoard.css';

const SudokuBoard = ({ board, currentCell, setCurrentCell }) =>
    board ? (
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
                                onClick={() =>
                                    setCurrentCell([rowIndex, colIndex])
                                }
                            >
                                {col !== 0 ? col : ''}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    ) : null;

SudokuBoard.defaultProps = {
    board: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
};

export default SudokuBoard;
