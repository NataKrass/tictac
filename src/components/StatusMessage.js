import React from 'react'

const StatusMessage = ({winner, current}) => {

    const noMoveLeft = current.board.every((el)=> el !== null);

    return (
        
        <h2> {winner && `Winner is ${winner}!!!`}
        {!winner && !noMoveLeft && `Next player is ${current.isXNext ? '0' : 'X'}`}
        {!winner && noMoveLeft && 'X or 0 tied'}
        </h2>
    )
}

export default StatusMessage
