import { Routes, Route } from "react-router-dom";
import ToolBar from "./components/Toolbar";
import Footer from "./components/Footer";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { FollowupTheme } from "./FollowupTheme";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProposalsPage from "./pages/ProposalsPage";
import ProposalPage from "./pages/ProposalPage";
import ProposalFollowupPage from "./pages/proposalFollowupPage";
import ProposalResourcesPage from "./pages/ProposalResourcesPage";

function App() {
  return (
    <>
      <ThemeProvider theme={FollowupTheme}>
        <CssBaseline />
        <ToolBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proposals" element={<ProposalsPage />} />
          <Route path="/proposals/:id" element={<ProposalPage />} />
          <Route
            path="/proposals/:id/followup"
            element={<ProposalFollowupPage />}
          />
          <Route
            path="/proposals/:id/resources"
            element={<ProposalResourcesPage />}
          />
        </Routes>

        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
