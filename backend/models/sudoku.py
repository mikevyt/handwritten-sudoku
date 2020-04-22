from math import floor
import random

test_board = [
    [3, 0, 6, 8, 0, 8, 4, 0, 0],
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
    board = _generate_complete_board()
    return _redact_values(board)


def _redact_values(board):
    for _ in range(40):
        row = random.randint(0, 8)
        col = random.randint(0, 8)
        # ensure we do not redact the same value
        while(board[row][col] == 0):
            row = random.randint(0, 8)
            col = random.randint(0, 8)

        board[row][col] = 0
    return board


def _generate_complete_board(m=3):
    '''
        Credit: Gareth Rees
        https://codereview.stackexchange.com/questions/88849/sudoku-puzzle-generator
    '''
    n = m**2
    board = [[None for _ in range(n)] for _ in range(n)]

    def search(c=0):
        i, j = divmod(c, n)
        i0, j0 = i - i % m, j - j % m
        numbers = list(range(-n, 0))
        random.shuffle(numbers)
        for x in numbers:
            if (x not in board[i]
                and all(row[j] != x for row in board)
                and all(x not in row[j0:j0+m]
                        for row in board[i0:i])):
                board[i][j] = x
                if c + 1 >= n**2 or search(c + 1):
                    return board
        else:
            board[i][j] = None
            return None

    return search()


def validate_board(board: [[int]], value: int, row_index: int, col_index: int) -> bool:
    for i in range(len(board)):
        if abs(board[i][col_index]) == value:
            return False

    # check row
    for j in range(len(board[row_index])):
        if abs(board[row_index][j]) == value:
            return False

    # check 3x3
    start_row_index, start_col_index = floor(
        row_index / 3) * 3, floor(col_index / 3) * 3
    for i in range(start_row_index, start_row_index + 3):
        for j in range(start_col_index, start_col_index + 3):
            if abs(board[i][j]) == value:
                return False

    return True
