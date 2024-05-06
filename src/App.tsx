import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import Masters from "./_root/pages/Masters";
import Prices from "./_root/pages/Prices";
import Contacts from "./_root/pages/Contacts";

function App() {
  return (
    <Routes >
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/masters" element={<Masters />} />
        <Route path="/prices/:name" element={<Prices />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
