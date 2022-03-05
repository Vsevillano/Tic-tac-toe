import './App.css';

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we needed in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import { Tablero } from './components/Tablero';
import { Login } from './components/Login';
import { Registro } from './components/Registro';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
      <Routes>
        <Route exact path="/" element={<Tablero />} />
        <Route exact path="/list" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registro />} />
      </Routes>
      
      </div>
    </div>
  );
}

export default App;
