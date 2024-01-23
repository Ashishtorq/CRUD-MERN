
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainTable from "./Components/MainTable";
import Todo from './Components/Todo';

const App = () => {

  return (
    <Router>
    <Routes>
    <Route path='/' element={
      <MainTable/>
    }/>
    <Route path='/:id' element={
      <Todo/>
    }
    />
    </Routes>
    </Router>
    
  );
};

export default App;
