import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Collection from "../pages/Collection"

const RouterApp = () => {

  // path -> url en el navegador
  // elemento -> que renderizo cuando el path es tal...
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/catalog" element={<Home />} />
        <Route path="/about" element={<Collection />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }