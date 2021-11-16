import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { Route, Routes, Redirect } from 'react-router-dom';

const Body = () => {
    return (
        <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
        </Routes>
    );
}

export default Body;