import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerticleNavbar from "./components/VerticalNavbar.jsx";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import LinksPage from "./pages/LinksPage.jsx";
import CreatelinkPage from "./pages/CreateLinkPage.jsx";
import AnalyticsPage from "./pages/AnalaticsPage.jsx";
import Footer from "./components/Footer.jsx";
import "../src/App.css";

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <div className="flex">
//           <div className="verticalNavBarAppJsx ]">
//             <VerticleNavbar />
//           </div>
//           <div className="appJsxClass">
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/link" element={<LinksPage />} />
//               <Route path="/createlink" element={<CreatelinkPage />} />
//               <Route path="/analytics" element={<AnalyticsPage />} />
//             </Routes>
//             <Footer />
//           </div>
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App;

// chatgpt

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import VerticleNavbar from "./components/VerticalNavbar.jsx";
// import Navbar from "./components/Navbar.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import LinksPage from "./pages/LinksPage.jsx";
// import CreatelinkPage from "./pages/CreateLinkPage.jsx";
// import AnalyticsPage from "./pages/AnalyticsPage.jsx";
// import Footer from "./components/Footer.jsx";
// import "../src/App.css";

function App() {
  return (
    <>
      <Router>
        <div className="navBarAppJsx">
          <Navbar />
        </div>
        {/* Main Content Layout with Vertical Navbar and Pages */}
        <div className="mainBodyAppJsx flex bg-[#e4e4ff]">
          {/* Vertical Navbar */}
          <div className="verticalNavBars w-[10vw] h-[100vh]">
            <VerticleNavbar />
          </div>
          <div className="mainSec flex flex-col">
            {/* Page Content and Routes */}
            <div className="AllRoutes w-[90vw] p-6  ">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/link" element={<LinksPage />} />
                <Route path="/createlink" element={<CreatelinkPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
              </Routes>
            </div>
            <div className="footerSection ">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
