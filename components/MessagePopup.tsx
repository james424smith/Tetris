import React from 'react'
import styled from 'styled-components'

const MsgPopupWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(var(--tile-size) * 10);
  height: calc(var(--tile-size) * 10);
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
`;

// Displays a message
export default function MessagePopup(props) {
  return (
    <div className='msgBox'>
      <h1>Message Title</h1>
      <p>Message info...</p>
    </div>
  )
}