import React, { useRef, useState } from 'react';
import './App.css';
import api from './api';

import SudokuBoard from './components/SudokuBoard/SudokuBoard';
import CanvasDraw from 'react-canvas-draw';
import ContextButtons from './components/ContextButtons/ContextButtons';

const testBoard = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0],
];
function App() {
    const canvasRef = useRef(null);
    const [currentCell, setCurrentCell] = useState([null, null]);
    // api.generateBoard().then((data) => (board = data.board));

    const printUrl = () => {
        if (canvasRef.current) {
            const image = canvasRef.current.canvasContainer.children[1].toDataURL();
            api.getNumber(image).then((data) => console.log(data));
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
    const vw = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    );
    return (
        <div className="App">
            <SudokuBoard
                board={testBoard}
                currentCell={currentCell}
                setCurrentCell={setCurrentCell}
            />
            <CanvasDraw
                ref={canvasRef}
                canvasHeight={vh}
                canvasWidth={vw - vh}
            />
            <ContextButtons onSave={printUrl} onReset={resetCanvas} />
        </div>
    );
}

export default App;
