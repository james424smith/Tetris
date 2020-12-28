import React from 'react'
import styled from 'styled-components'

const BtnGroup = styled.div`
  grid-area: b;
  display: flex;
  flex-direction: row;
`;

const ControlBtn = styled.button`
  --size: calc(var(--title-size) * 2.5);
  width: var(--size);
  height: var(--size);
  text-align: center;
  display: block;
  border-width: 5px;
  border-top-color: var(--button-color-t);
  border-left-color: var(--button-color-l);
  border-right-color: var(--button-color-r);
  border-bottom-color: var(--button-color-b);
`;

export default function Controls(props) {
  return (
    <BtnGroup>
      <ControlBtn onClick={(e) => {}}>Left</ControlBtn>
      <ControlBtn onClick={(e) => {}}>Right</ControlBtn>
      <ControlBtn onClick={(e) => {}}>Rotate</ControlBtn>
      <ControlBtn onClick={(e) => {}}>Down</ControlBtn>
    </BtnGroup>
    )
}