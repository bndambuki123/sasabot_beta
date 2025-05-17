import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Demo } from './pages/Demo';
import { Pricing } from './pages/Pricing';
import { Signup } from './pages/Signup';
import { Faq } from './pages/Faq';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Toaster } from 'react-hot-toast';

// function App() {
//   return (
//     <Router>
//       <Toaster position="top-right" />
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/demo" element={<Demo />} />
//           <Route path="/pricing" element={<Pricing />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/faq" element={<Faq />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/terms-of-service" element={<TermsOfService />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// src/App.tsx
function App() {
  return <h1>Hello from Sasabot Beta!</h1>;
}

export default App;
