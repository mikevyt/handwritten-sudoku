from math import floor

test_board = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0],
]


def generate_board():
    # TODO
    return test_board


def validate_board(board: [[int]], value: int, row_index: int, col_index: int) -> bool:
    #TODO: TEST
    # check col
    for i in range(len(board)):
        if board[i][col_index] == value:
            return False

    # check row
    for j in range(len(board[row_index])):
        if board[row_index][j] == value:
            return False

    # check 3x3
    start_row_index, start_col_index = floor(
        row_index / 3) * 3, floor(col_index / 3) * 3
    for i in range(start_row_index, start_row_index + 3):
        for j in range(start_col_index, start_col_index + 3):
            if board[i][j] == value:
                return False

    return True
