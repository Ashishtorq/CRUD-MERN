import { BrowserRouter , Route, Routes } from "react-router-dom";
import MainTable from "./Components/MainTable";
import Todo from "./Components/Todo";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainTable />} />
        <Route path="/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
