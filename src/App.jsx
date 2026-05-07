import { Route, Routes } from "react-router-dom";

// layout
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";

// pages
import { Home, Login, SignUp, Verify, Profile, Programs } from "./pages";

function App() {
  return (
    // MainLayout
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index={true} element={<Home />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/programs/:courseId" element={<Programs />} />
      </Route>

      {/* AuthLayout */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
