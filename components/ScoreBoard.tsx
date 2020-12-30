import React from 'react'
import styled from 'styled-components'

// const Button = styled.button`
//   display: block;
//   padding: 1em;
//   border-width: 5px;
//   border-top-color: var(--button-color-t);
//   border-left-color: var(--button-color-l);
//   border-right-color: var(--button-color-r);
//   border-bottom-color: var(--button-color-b);
// `;

// const ScoreWrapper = styled.div`
//   grid-area: r;
//   text-align: center;
// `;

export default function ScoreBoard(props) {
    return (
        <div className='score-board'>
            <div>Score:{ props.score }</div>
            <div>Level: 1</div>
            <button className="score-board-button" onClick={(e) => {
            }}>Play</button>
            <button className="score-board-button" onClick={(e) => {
            }}>Restart</button>
        </div>
    )
}