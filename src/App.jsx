import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import FeaturedItem from './components/FeaturedItem';
import Card from './components/Card';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <>
            <Navbar />
            <FeaturedItem />
            <Dashboard />
        </>
    );
}

export default App;
