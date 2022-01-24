import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import New from './components/New';
import Articles from './components/Articles';

const Router = () => {
    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<New />} />
                <Route exact path="/articles" element={<Articles />} />
                
            </Routes>
        </BrowserRouter>


    );
}

export default Router;

