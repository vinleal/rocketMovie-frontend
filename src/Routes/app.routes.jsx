import { Routes, Route } from "react-router-dom";

import { MoviePreview } from "../pages/MoviePreview";
import { CreateMovie } from "../pages/CreateMovie";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/preview" element={<MoviePreview />} />
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateMovie />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}