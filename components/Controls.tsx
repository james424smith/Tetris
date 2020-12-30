import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../redux/actions'

// const BtnGroup = styled.div`
//   grid-area: b;
//   display: flex;
//   flex-direction: row;
// `;

// const ControlBtn = styled.button`
//   --size: calc(var(--title-size) * 2.5);
//   width: var(--size);
//   height: var(--size);
//   text-align: center;
//   display: block;
//   border-width: 5px;
//   border-top-color: var(--button-color-t);
//   border-left-color: var(--button-color-l);
//   border-right-color: var(--button-color-r);
//   border-bottom-color: var(--button-color-b);
// `;

export default function Controls(props) {

  const dispatch = useDispatch()
  const isRunning = useSelector((state) => state.isRunning)

  return (
    <div className='controls'>
      <button className='control-btn' onClick={(e) => { dispatch(moveLeft()) }}>Left</button>
      <button className='control-btn' onClick={(e) => { dispatch(moveRight()) }}>Right</button>
      <button className='control-btn' onClick={(e) => { dispatch(rotate()) }}>Rotate</button>
      <button className='control-btn' onClick={(e) => { dispatch(moveDown()) }}>Down</button>
    </div>
  )
}