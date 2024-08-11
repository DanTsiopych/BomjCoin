import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import BonusPage from "./pages/BonusPage/BonusPage";
import AchievesPage from "./pages/AchievesPage/AchievesPage";
import BoostsPage from "./pages/BoostsPage/BoostsPage";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<MainPage />} />
    <Route path='/secret' element={<BonusPage />} />
    <Route path='/achieves' element={<AchievesPage />} />
    <Route path='/boosts' element={<BoostsPage />} />
  </Route>
))

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
