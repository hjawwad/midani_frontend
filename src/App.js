import { Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HomePage from "./pages/Home/Home";
import TermsCoditions from "./pages/Terms-conditions/Terms-conditions";
import PrivacyPolicy from "./pages/Privacy-policy/Privacy-policy";
import News from "./pages/News/News";
import NewsDetail from "./pages/News-detail/News-detail";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Imprint from "./pages/Imprint/Imprint";
import Sales from "./pages/Sales/Index";
import BrandsStory from "./pages/Brand/Index";
import OTT from "./pages/OTT/Index";
import { useEffect } from "react";
import i18next from "i18next";

function App() {
  useEffect(() => {
    i18next.changeLanguage("en");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/detail" element={<NewsDetail />} />
        <Route path="/terms" element={<TermsCoditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/ott" element={<OTT />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/brandsstory" element={<BrandsStory />} />
      </Routes>
    </>
  );
}

export default App;
