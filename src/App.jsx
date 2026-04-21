import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "../pages/HomePage";
import SingleMoviePage from "../pages/SingleMoviePage";
function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/movie/:id" element={<SingleMoviePage/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
