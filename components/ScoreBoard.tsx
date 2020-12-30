import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pause, resume, restart } from '../redux/actions'
import styled from 'styled-components'

const Button = styled.button`
  display: block;
  padding: 1em;
  border-width: 5px;
  border-top-color: var(--button-color-t);
  border-left-color: var(--button-color-l);
  border-right-color: var(--button-color-r);
  border-bottom-color: var(--button-color-b);
`;

const ScoreWrapper = styled.div`
  grid-area: r;
  text-align: center;
`;

export default function ScoreBoard(props) {

    const dispatch = useDispatch()
    const game = useSelector((state) => state.game)
    const { score, isRunning, gameOver } = game
    return (
        <ScoreWrapper>
            <div>Score:{ score }</div>
            <div>Level: 1</div>
            <Button onClick={(e) => {
                if (gameOver) { return }
                if (isRunning) {
                    dispatch(pause())
                } else {
                    dispatch(resume())
                }
            }}>Play</Button>
            <Button onClick={(e) => {
                 dispatch(restart())
            }}>Restart</Button>
        </ScoreWrapper>
    )
}