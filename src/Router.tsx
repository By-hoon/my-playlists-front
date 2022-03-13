import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Login from "./routes/Login";

import { isLoggedIn } from "./test/user";

const Router = () => {
  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
export default Router;
