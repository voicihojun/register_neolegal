import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inscription from "./page/Inscription";
import MerciIndex from "./page/MerciIndex";
import MerciUser from "./page/MerciUser";
import Home from "./page/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register_neolegal" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/merci" element={<MerciIndex />}>
          <Route path=":username" element={<MerciUser />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
