import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout";
function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route index element={<h1>Home</h1>}/>
          <Route path="/movie/:id" element={<h1>Singol movie</h1>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
