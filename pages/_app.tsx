import '../styles/globals.css'
import styled from 'styled-components';
import GridSquare from './../components/GridSquare';
import GridBoard from '../components/GridBoard';
import NextBlock from './../components/NextBlock';

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
`;

function MyApp() {
  return (
    <div className="App">
      <AppHeader>Test Redux</AppHeader>
      <GridBoard />
      <NextBlock />
    </div>
  );
}

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default MyApp
