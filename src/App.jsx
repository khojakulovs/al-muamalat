import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layout
import MainLayout from "./layout/MainLayout";

// pages
import { Home, Login, SignUp } from "./pages";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index={true} element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>,
    ),
  );

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
