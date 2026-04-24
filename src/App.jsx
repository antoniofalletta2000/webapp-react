import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "../pages/HomePage";
import SingleMoviePage from "../pages/SingleMoviePage";
import AdminPage from "../pages/AdminPage";
import {GlobalProvider} from "../Context/GlobalContext"
function App() {
  

  return (
    <GlobalProvider>
     <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/movie/:id" element={<SingleMoviePage/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
