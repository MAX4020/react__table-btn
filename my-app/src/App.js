import './App.css';
import Main from "./page/Main"
import { MainContextProvider } from "./context/MainContext";

function App() {
  return (
    <>
      <MainContextProvider>
        <Main/>
      </MainContextProvider>
    </>
  );
}

export default App;
