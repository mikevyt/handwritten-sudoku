from flask import Flask, request, jsonify
import models.sudoku as sudoku
import models.interpreter as interpreter
from flask_cors import CORS

# init app
app = Flask(__name__)
CORS(app)


@app.route('/board/new', methods=['GET'])
def new_board():
    return jsonify({'board': sudoku.generate_board()})


@app.route('/board/validate', methods=['POST'])
def validate():
    entry, board = request.json.values()
    value, row_index, col_index = entry.values()

    return jsonify({
        'number': value,
        'validSudoku': sudoku.validate_board(board, value, row_index, col_index)
    })


@app.route('/interpret', methods=['POST'])
def interpret():
    image_data_url = request.json['image']
    return jsonify({'number': int(interpreter.interpret(image_data_url))})


if __name__ == '__main__':
    app.run(debug=True, threaded=False)
