import { Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HomePage from "./pages/Home/Home";
import TermsCoditions from "./pages/Terms-conditions/Terms-conditions";
import PrivacyPolicy from "./pages/Privacy-policy/Privacy-policy";
import CustomNavbar from "./components/Navbar/Navabr";

function App() {
  return (
    <>
      {/* <CustomNavbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsCoditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
