import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { FollowupTheme } from "./FollowupTheme";
import ToolBar from "./components/Toolbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProposalsPage from "./pages/ProposalsPage";
import ProposalPage from "./pages/ProposalPage";

function App() {
  return (
    <>
      <ThemeProvider theme={FollowupTheme}>
        <CssBaseline />
        <ToolBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proposals" element={<ProposalsPage />} />
          <Route path="/proposals/:proposalId" element={<ProposalPage />} />
        </Routes>

        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
