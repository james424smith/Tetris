import '../styles/globals.css'
import styled from 'styled-components';
import GridSquare from './../components/GridSquare';
import GridBoard from '../components/GridBoard';
import NextBlock from './../components/NextBlock';
import ScoreBoard from '../components/ScoreBoard';

const AppHeader = styled.h1`
  background-color: #282c34;
  min-height: 10vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  grid-area: h;
`;

const App = styled.div`
  --col-side: calc(var(--tile-size) * 4);
  --col-center: calc(var(--tile-size) * 10);
  --grid-height: calc(var(--tile-size) * 18);
  width: calc(var(--tile-size) * (4 + 1 + 10 + 1 + 4));
  margin: auto;
  display: grid;

  grid-gap: var(--tile-size) var(--tile-size);
  grid-template-columns: var(--col-side) var(--col-center) var(--col-side);
  grid-template-rows: 100px var(--grid-height) 100px;

  grid-template-areas: "h h h"
                       "l c r"
                       ". b .";
`;
/* This defines the areas on the grid with names: 'h', 'l', 'c', 'r',
and 'b'. The '.' represents an empty cell on the grid. */
/* Defines three rows of `100px`, `--grid-height`, and 100px. */
/* Defines three columns of `--col-side`, `--col-center`, and `--col-side` widths. */

function MyApp() {
  return (
    <App>
      <AppHeader>Test Redux</AppHeader>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
    </App>
  );
}

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default MyApp
