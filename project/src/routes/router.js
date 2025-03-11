import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/user/home/Home'
import MainLayout from '../layouts/MainLayout'
import Podcast from '../assets/components/podcast/Podcast'

const Router = () => {
    return (
        <>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/podcast/:id" element={<Podcast />} />
                </Routes>
            </MainLayout>
        </>
    )
}

export default Router