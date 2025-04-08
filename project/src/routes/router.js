import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/user/home/Home";
import MainLayout from "../layouts/MainLayout";
import Podcast from "../assets/components/podcast/Podcast";
import Genres from '../pages/user/home/Genres';
import Albums from '../pages/user/home/Albums';
import Artist from '../pages/user/home/Artist';
import Radio from '../pages/user/home/Radio';



const Router = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast/:id" element={<Podcast />} />
          <Route path="/genres" element={<Genres />} /> 
          <Route path="/albums" element={<Albums />} />
              <Route path="/artist" element={<Artist />} />
              <Route path="/radio" element={<Radio />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default Router;
