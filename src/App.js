import "./App.css";
import Category from "./components/cat";
import WalletConnector from "./pages/connect";
import FormComponent from "./pages/Create";
import Join from "./pages/Join";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CenteredButtons from "./pages/Options";
import SuccessPage from "./components/Success";
import ElectionSearchPage from "./components/SearchID";
import VotingApp from "./pages/Vote";
import VotingApps from "./pages/Vote2";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<WalletConnector />} />
          <Route path="/create" element={<FormComponent />} />
          <Route path="/join" element={<Join />} />
          <Route path="/options" element={<CenteredButtons />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/search" element={<ElectionSearchPage />} />
          <Route path="/vote" element={<VotingApp />} />
          <Route path="/vote2" element={<VotingApps />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
