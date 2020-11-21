import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul className="history-list">
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              className={move === currentMove ? 'history-btn' : 'history-btn active'}
              type="button"
              style={{
                fontWeight: move === currentMove ? 'bold' : 'normal',
              }}
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'Go to game start' : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
