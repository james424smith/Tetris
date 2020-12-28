import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #282c34;
  min-height: 10vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default function ScoreBoard(props) {
    return (
        <div className="score-board">
            <div>Score:{ props.score }</div>
            <div>Level: 1</div>
            <Button className="score-board-button" onClick={(e) => {
            }}>Play</Button>
            <Button className="score-board-button" onClick={(e) => {
            }}>Restart</Button>
        </div>
    )
}