import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AllRoutes from "./router";

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
    </div>
  );
};

export default App;
