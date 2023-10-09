import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <AppRouter></AppRouter>
        </BrowserRouter>
    </div>
  );
}

export default App;
