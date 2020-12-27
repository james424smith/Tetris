import '../styles/globals.css'
import styled from 'styled-components';
import GridSquare from './../components/GridSquare';

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
      <GridSquare color="1" />
    </div>
  );
}

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default MyApp
