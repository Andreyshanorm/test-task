import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { FormPage } from "./pages/FormPage/FormPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/test-task" element={<HomePage />} />
          <Route path="/test-task/form" element={<FormPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
