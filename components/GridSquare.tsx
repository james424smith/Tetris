import React from 'react'
import styled from 'styled-components'

// Represents a grid square with a color

// const GridWrapper = styled.div`
//   border-style: solid;
//   width: var(--tile-size);
//   height: var(--tile-size);
//   border-width: var(--border-width);
//   border-left-color: var(--border-left-color);
//   border-top-color: var(--border-top-color);
//   border-right-color: var(--border-right-color);
//   border-bottom-color: var(--border-bottom-color);
//   color: ${props => props.color};
// `;

export default function GridSquare(props) {
  const classes = `grid-square color-${props.color}`
  return <div className={classes}></div>
}