import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "../Pages/Home";
import Detail from "../Pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/detail" element = {<Detail />}/>
        <Route path="*" element={<Navigate replace to= "/"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router; 