import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Login from "./routes/login";
import Playlist from "./routes/playlist";
import SearchSongResult from "./routes/searchSongResult";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/search" element={<SearchSongResult />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
