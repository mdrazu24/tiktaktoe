import { useState } from 'react'

export default function Home() {
  const [selectedPlayer , setSelectedPlayer] = useState(1)

  const [playerOne] = useState("X")
  const [playerTwo] = useState("O")
  const [playerThree] = useState("Z")

  const [board, setBoard] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ])


  const clickHandler = (mainIndex, index) => {
     if (board[mainIndex][index] != "") {
       return alert("Already selected!")
     }else {
      setBoard((prev) => {
        const updatedArr = [...prev]
        updatedArr[mainIndex][index] =
          selectedPlayer == 1
            ? playerOne
            : selectedPlayer == 2
            ? playerTwo
            : playerThree

        return updatedArr
      })

       if (winnerCheck(selectedPlayer, mainIndex, index)) {
      alert(`Player ${selectedPlayer} wins!`);
      resetBoard();
    }



      setSelectedPlayer(selectedPlayer == 1 ? 2 : selectedPlayer == 2 ? 3 : 1)

     }
    
  }

  const winnerCheck = (selectedPlayer, mainIndex, index) => {
    const player =
      selectedPlayer == 1
        ? playerOne
        : selectedPlayer == 2
        ? playerTwo
        : playerThree
    
    let count = 1
    for (let i = 0; i < 7; i++) {
      if (board[mainIndex][i] === player) count++
      else count = 1
      if (count === 5) return true
    }

    count = 1
    for (let i = 0; i < 7; i++) {
      if (board[i][index] === player) count++
      else count = 1
      if (count === 5) return true
    }


    

  }


  const resetBoard = () => {
    setBoard([
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
    ])
  }
  
  return (
    <>
      <h1 style={{ margin: 5, textAlign: "center" }}>
        Selected player {selectedPlayer}
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {board.map((val, mindex) => {
          return (
            <div key={mindex}>
              <div>
                {val.map((value, inx) => {
                  return (
                    <div
                    key={inx}
                      onClick={() => clickHandler(mindex, inx)}
                      style={{ height: 50, width: 50, border: "1px solid red", display : "flex", alignItems : "center", justifyContent : "center", backgroundColor : "#cccccc", cursor : "pointer" }}
                    >{value}</div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

