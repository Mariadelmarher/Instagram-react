import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login, HomeInstagram} from './components/main';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/Home" element={<PrivateRoute>
          <HomeInstagram/>
        </PrivateRoute>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
