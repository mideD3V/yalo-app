
import "./App.css";
import { Routes, Route } from "react-router-dom";

import ListItem from './components/list/ListItem'
import Home from "./components/home/Home";



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list" element={ <ListItem/>}/>

      
      </Routes>
    </div>
  );
}

export default App;
