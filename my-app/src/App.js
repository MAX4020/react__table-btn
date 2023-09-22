import './App.css';
import Main from "./page/Main"
import Table from './page/Table';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { MainContextProvider } from "./context/MainContext";

function App() {
  return (
    <>
      <Router>
        <MainContextProvider>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/table' element={<Table/>}/>
          </Routes>
        </MainContextProvider>
      </Router>
    </>
  );
}

export default App;
