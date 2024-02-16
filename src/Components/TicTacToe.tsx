import React, { useEffect, useState } from "react";
type Player = "X" | "O";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [user, setUser] = useState<Player>("X");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [difficult, setDifficult] = useState<boolean>(false);
  const [isdraw, setDraw] = useState<boolean>(false);

  useEffect(() => {
    if (user === "O" && !gameOver) {
      const moveIndex = computer(board);
      handleMove(moveIndex);
      //handleComputer Move
    }
  }, [user, board, gameOver]); //dependicies of TicTacToe

  const handleMove = (index: number) => {
    if (!gameOver && board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = user;
      setBoard(newBoard);
      setUser(user === "X" ? "O" : "X");
      console.log(board);
      if (checkWinner(newBoard, user)) {
        if (user) {
          alert(`${user} win`);
          //alert of user win
        }
      }
    } else {
      if (isdraw) {
        alert("Match Draw");
        return;
      }
      alert("Invalid move!");
    }
  };

  const checkWinner = (board: Player[], player: Player): boolean => {
    const winningLines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of winningLines) {
      const [a, b, c] = line;
      if (board[a] === player && board[b] === player && board[c] === player) {
        setGameOver(true);
        return true;
        // Player has won
      }
    }
    setDraw(true);
    return false; // No winning combination found
  };

  const computer = (board: Player[]): number => {
    const winningLines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Check if computer can win
    for (let line of winningLines) {
      const [a, b, c] = line;
      if (board[a] === "O" && board[b] === "O" && board[c] === null) {
        return c;
      } else if (board[a] === "O" && board[b] === null && board[c] === "O") {
        return b;
      } else if (board[a] === null && board[b] === "O" && board[c] === "O") {
        return a;
      }
    }

    // Check if computer needs to block the opponent

    if (difficult) {
      for (let line of winningLines) {
        const [a, b, c] = line;
        if (board[a] === "X" && board[b] === "X" && board[c] === null) {
          return c;
        } else if (board[a] === "X" && board[b] === null && board[c] === "X") {
          return b;
        } else if (board[a] === null && board[b] === "X" && board[c] === "X") {
          return a;
        }
      }
    }

    const availableMoves: number[] = [];
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        availableMoves.push(i);
      }
    }
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  };

  return (
    <>
      <h2 className="text-5xl text-center">Welcome to TicTacToe Game</h2>
      <div className="flex items-center flex-col justify-center h-full mt-10">
        <div className="border border-purple-500 w-80 h-80 grid grid-cols-3 gap-0 ">
          {board.map((cell, index) => (
            <div key={index}>
              <button
                className="bg-blue-40 w-full h-full border border-purple-500"
                onClick={() => handleMove(index)}
              >
                <span className="text-purple-500 text-5xl">{cell || ""}</span>
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-2">
          <input
            type="checkbox"
            name=""
            id=""
            className="flex flex-row "
            onClick={() => setDifficult(true)}
          />
          difficult level high
        </div>
        <h2>User's Turn: {user}</h2>
      </div>
    </>
  );
};

export default TicTacToe;
