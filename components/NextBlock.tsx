import React from 'react'
import GridSquare from './GridSquare'
import styled from 'styled-components'

const NBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, var(--tile-size));
  align-self: flex-start;
`;
// Draws the "next" block view showing the next block to drop
export default function NextBlock(props) {

    const box = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
    // Map the block to the grid
    const grid = box.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <GridSquare key={`${row}${col}`} color={square} />
        })
    })

    return (
        <NBlock>
            {grid}
        </NBlock>
    )
}