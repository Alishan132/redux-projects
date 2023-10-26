import { Routes, Route } from "react-router-dom";
import Public from "./components/Public.jsx";
import Login from "./features/auth/Login.jsx";
import Welcome from "./features/auth/Welcome.jsx";
import RequireAuth from "./features/auth/ReaquireAuth.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="/login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/welcome" element={<Welcome />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
