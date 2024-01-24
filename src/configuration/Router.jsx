import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "../components/views/homeView/HomeView";
import { TestView } from "../components/views/testView/TestView"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/test-view" element={<TestView />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
