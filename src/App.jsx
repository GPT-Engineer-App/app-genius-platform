import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateApp from "./pages/CreateApp.jsx";
import AppResult from "./pages/AppResult.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create-app" element={<CreateApp />} />
        <Route path="/app-result" element={<AppResult />} />
      </Routes>
    </Router>
  );
}

export default App;
