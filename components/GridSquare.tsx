import React from 'react'
import styled from 'styled-components'

// Represents a grid square with a color

const GridWrapper = styled.div`
  border-style: solid;
  width: var(--tile-size);
  height: var(--tile-size);
  border-width: var(--border-width);
  border-left-color: var(--border-left-color);
  border-top-color: var(--border-top-color);
  border-right-color: var(--border-right-color);
  border-bottom-color: var(--border-bottom-color);
`;

export default function GridSquare(props) {
  console.log('GridSquare: ' + props.color);
  const classes = `grid-square color-${props.color}`
  console.log('classes: ' + classes);
  return <div className={classes}></div>
}