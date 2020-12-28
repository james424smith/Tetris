import React from 'react'
import GridSquare from './GridSquare'
import styled from 'styled-components'

// Represents a 10 x 18 grid of grid squares

const MainBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--cols), var(--tile-size));
  grid-gap: 0;
  align-self: flex-start;
  grid-area: c;
`;

export default function GridBoard(props) {

  // generates an array of 18 rows, each containing 10 GridSquares.

    const grid = []
    for (let row = 0; row < 18; row ++) {
        grid.push([])
        for (let col = 0; col < 10; col ++) {
            grid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
        }
    }

  // The components generated in makeGrid are rendered in div.grid-board

    return (
        <MainBoard className='grid-board'>
            {grid}
        </MainBoard>
    )
}