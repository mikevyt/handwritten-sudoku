import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import api from './api';

import SudokuBoard from './components/SudokuBoard/SudokuBoard';
import Rules from './components/Rules/Rules';
import CanvasDraw from 'react-canvas-draw';
import ContextButtons from './components/ContextButtons/ContextButtons';

function App() {
    const canvasRef = useRef(null);
    const [currentCell, setCurrentCell] = useState([null, null]);
    const [board, setBoard] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!board) {
            api.getBoard().then((data) => setBoard(data.board));
        }
    });

    const saveEntry = () => {
        if (canvasRef.current) {
            const image = canvasRef.current.canvasContainer.children[1].toDataURL();
            api.getNumber(image)
                .then((data) =>
                    api.validateEntry(
                        board,
                        data.number,
                        currentCell[0],
                        currentCell[1]
                    )
                )
                .then((data) => {
                    canvasRef.current.clear();
                    if (data.validSudoku) {
                        let incomingBoard = board;
                        incomingBoard[currentCell[0]][currentCell[1]] =
                            data.number;
                        setBoard(incomingBoard);
                        setCurrentCell([null, null]);
                        setError(null);
                    } else {
                        setError(`Cannot place a ${data.number} in this cell!`);
                    }
                });
        }
    };

    const resetCanvas = () => {
        if (canvasRef.current) {
            canvasRef.current.clear();
        }
    };

    const vh = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );

    return (
        <div className="App">
            <SudokuBoard
                board={board || undefined}
                currentCell={currentCell}
                setCurrentCell={setCurrentCell}
            />
            <div className="right-container">
                <h1>Sudoku</h1>
                <Rules />
                <div className="error">*{error}*</div>
                <CanvasDraw
                    ref={canvasRef}
                    canvasHeight={vh / 2}
                    canvasWidth={vh / 2}
                    brushRadius={12}
                />
                <ContextButtons onSave={saveEntry} onReset={resetCanvas} />
            </div>
        </div>
    );
}

export default App;
